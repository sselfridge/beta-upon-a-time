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
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//local components
import ChipGroup from './shared/ChipGroup';
import TimePicker from './shared/TimePicker';
import Theme from '../../theme';

import { getTimeString } from '../../utils/Time';

const AddNew = (props) => {
  const { setTasks, setShowAddNew } = props;

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

  const nameRef = useRef(null);
  const freqRef = useRef(null);

  return (
    <View style={styles.addNew}>
      <ScrollView contentContainerStyle={styles.addNewScroll}>
        <View style={styles.input}>
          <Text style={styles.summary}>{`I will do ${name || 'task'}`}</Text>
          <Text style={styles.summary}>
            {`${frequency} times a ${duration} at ${getTimeString(time)}`}
          </Text>
        </View>
        {/* <Text>Do task:</Text> */}
        <View style={styles.input}>
          <TextInput
            ref={nameRef}
            autoFocus={true}
            placeholder="Task Name"
            onChangeText={setName}
          />
        </View>
        <View style={[styles.row, styles.input]}>
          <Pressable onPress={() => setFrequency((f) => f + 1)}>
            <FontAwesome name="arrow-up" size={24} color="black" />
          </Pressable>
          <Text style={styles.freqText}>{frequency}</Text>
          <Pressable
            onPress={() =>
              setFrequency((f) => {
                const newF = f - 1;
                return newF > 0 ? newF : 1;
              })
            }
          >
            <FontAwesome name="arrow-down" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.input}>
          <ChipGroup
            labels={TIME_OPTIONS}
            activeLabel={duration}
            setActive={setDuration}
          />
        </View>
        <TimePicker setTime={setTime} />
        <View style={styles.buttons}>
          <Button
            title="Cancel"
            onPress={() => {
              setShowAddNew(false);
            }}
            color={Theme.secondary}
          />
          <Button title="Advanced" disabled color={Theme.gray} />
          <Button title="Save" onPress={handleAddTask} color={Theme.primary} />
        </View>
      </ScrollView>
    </View>
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
    position: 'absolute',

    // width: '100%',
    height: '70%',
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    marginHorizontal: 16,
  },
  addNewScroll: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    // height: 120,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'space-around',
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
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
    textAlign: 'center',
  },
});

export default AddNew;
