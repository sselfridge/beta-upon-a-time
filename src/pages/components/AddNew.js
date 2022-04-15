import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { useBackHandler } from '@react-native-community/hooks';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Pressable,
  ScrollView,
  Modal,
  StatusBar,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//local components
import ChipGroup from './shared/ChipGroup';
import TimePicker from './shared/TimePicker';
import Theme from '../../theme';

import { getTimeString } from '../../utils/Time';

const AddNew = (props) => {
  const { setTasks, showAddNew, setShowAddNew } = props;

  const handleAddTask = (e) => {
    const newTask = {
      id: new Date().getTime(),
      name,
      duration,
      frequency,
      time,
    };
    setTasks((oldTasks) => {
      const tasks = oldTasks.slice();
      tasks.push(newTask);
      return tasks;
    });
    setShowAddNew(false);
  };

  useBackHandler(() => {
    setShowAddNew(false);
    return true;
  });

  const TIME_OPTIONS = ['day', 'week', 'month'];
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(TIME_OPTIONS[1]);
  const [frequency, setFrequency] = useState(1);
  const [time, setTime] = useState(new Date());

  const [saveDisabled, setSaveDisabled] = useState(true);

  const nameRef = useRef(null);
  const freqRef = useRef(null);

  const handleDurationPress = () => {
    const currIdx = TIME_OPTIONS.findIndex((v) => v === duration);
    const newIdx = (currIdx + 1) % TIME_OPTIONS.length;
    setDuration(TIME_OPTIONS[newIdx]);
  };

  useEffect(() => {
    //validation
    setSaveDisabled(!name);
  }, [name]);

  return (
    <Modal visible={showAddNew} animationType={'slide'}>
      {/* <StatusBar /> */}
      <View style={styles.addNew}>
        <View style={styles.input}>
          <Text style={styles.summary}>I will do</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={[styles.touchable, styles.summary]}
            ref={nameRef}
            autoFocus={true}
            placeholder="Task Name"
            onChangeText={setName}
          />
        </View>
        <View style={styles.input}>
          <Pressable
            onPress={() => setFrequency((f) => f + 1)}
            onLongPress={() => setFrequency(1)}
          >
            <Text style={[styles.summary, styles.touchable]}>{frequency}</Text>
          </Pressable>
          <Text style={styles.summary}> times a </Text>
          <Pressable onPress={handleDurationPress}>
            <Text
              style={[styles.summary, styles.touchable]}
            >{`${duration}`}</Text>
          </Pressable>
        </View>
        <View style={styles.input}>
          <Text style={styles.summary}>at around</Text>
          <TimePicker
            viewStyle={styles.touchable}
            textStyle={styles.summary}
            time={time}
            setTime={setTime}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title="Cancel"
            onPress={() => {
              console.info('Cancel Press');
              setShowAddNew(false);
            }}
            color={Theme.secondary}
          />
          <Button title="Advanced" disabled color={Theme.gray} />
          <Button
            title="Save"
            onPress={handleAddTask}
            color={Theme.primary}
            disabled={saveDisabled}
          />
        </View>
      </View>
    </Modal>
  );
};

AddNew.propTypes = {
  setTasks: PropTypes.func.isRequired,
  setShowAddNew: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  addNew: {
    flex: 1,
    bottom: 0,
    backgroundColor: '#fefefe',
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 16,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  addNewScroll: {},
  buttons: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'space-around',
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  touchable: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  freqText: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
  },

  summary: {
    fontSize: 24,
    padding: 10,
    textAlign: 'center',
  },
});

export default AddNew;
