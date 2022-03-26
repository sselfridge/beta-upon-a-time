import React, { useState, useEffect, useCallback } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  BackHandler,
} from 'react-native';

export default function AddNew(props) {
  const { setTasks, setAddNewTask } = props;

  const handleAddTask = (e) => {
    console.info('save');
  };

  const handleTimePick = (e, index) => {
    console.info(e, index);
    setDuration(e);
  };

  const handleChangeFrequency = (e) => {
    console.info(e);
  };

  const handleBackBtn = () => {
    console.info('closing for back btn');
    setAddNewTask(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackBtn);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackBtn);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [duration, setDuration] = useState('');
  const [frequency, setFrequency] = useState(1);
  const TIME_OPTIONS = ['day', 'week', 'month'];

  return (
    <View style={styles.addNew}>
      <Text>Do task:</Text>
      <TextInput
        autoFocus={true}
        placeholder="Task Name"
        onChangeText={handleAddTask}
      />
      <Text>At least:</Text>
      <TextInput
        autoFocus={true}
        placeholder="Number"
        keyboardType="numeric"
        onChangeText={handleChangeFrequency}
      />
      <Text>times a</Text>
      <Picker
        style={styles.picker}
        selectedValue={duration}
        propmt="Duration"
        onValueChange={handleTimePick}
      >
        {TIME_OPTIONS.map((o) => (
          <Picker.Item key={o} label={o} value={o} />
        ))}
      </Picker>
      <View style={styles.buttons}>
        <Button style={styles.saveBtn} title="Save" onPress={handleAddTask} />
        <Button
          style={styles.cancelBtn}
          title="Cancel"
          onPress={() => {
            console.info('cancel');
            setAddNewTask(false);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addNew: {
    flex: 1,
    bottom: 0,
    backgroundColor: '#fefefe',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    height: '50%',
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
  },
  buttons: {
    width: '80%',
    // height: 50,
    alignContent: 'space-between',
  },
  cancelBtn: {
    margin: 30,
  },
  saveBtn: { margin: 30 },
  picker: {
    // height: 40,
    width: 125,
  },
});
