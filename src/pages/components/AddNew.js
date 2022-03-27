import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { useBackHandler } from '@react-native-community/hooks';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  BackHandler,
  Pressable,
} from 'react-native';
import ChipGroup from './shared/ChipGroup';
import { FontAwesome } from '@expo/vector-icons';
import Theme from '../../theme';

const AddNew = (props) => {
  const { setTasks, setShowAddNew } = props;

  const handleAddTask = (e) => {
    console.info('e: ', e);
  };

  useBackHandler(() => {
    console.info('closing for back btn');
    setShowAddNew(false);
    return true;
  });

  const TIME_OPTIONS = ['day', 'week', 'month'];
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(TIME_OPTIONS[1]);
  const [frequency, setFrequency] = useState(1);

  const nameRef = useRef(null);
  const freqRef = useRef(null);

  return (
    <View style={styles.addNew}>
      <View>
        <Text style={styles.summary}>{`I will do ${
          name || 'task'
        } ${frequency} times a ${duration}`}</Text>
      </View>
      {/* <Text>Do task:</Text> */}
      <TextInput
        ref={nameRef}
        autoFocus={true}
        placeholder="Task Name"
        onChangeText={setName}
      />
      <View style={styles.row}>
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
      <ChipGroup
        labels={TIME_OPTIONS}
        activeLabel={duration}
        setActive={setDuration}
      />
      <View style={styles.buttons}>
        <Button
          style={styles.saveBtn}
          title="Save"
          onPress={handleAddTask}
          color={Theme.primary}
        />
        <Button
          style={styles.cancelBtn}
          title="Cancel"
          onPress={() => {
            console.info('cancel');
            setShowAddNew(false);
          }}
          color={Theme.secondary}
        />
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    height: '70%',
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    marginHorizontal: 16,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    // height: 120,
    marginTop: 40,
    justifyContent: 'space-around',
  },

  cancelBtn: {
    margin: 30,
  },
  freqText: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
  },
  saveBtn: {
    width: '40%',
    color: Theme.primary,
  },
  summary: {
    marginBottom: 50,
    fontSize: 24,
  },
});

export default AddNew;
