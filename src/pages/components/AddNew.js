import React, { useState, useEffect } from 'react';
// import { Picker } from '@react-native-picker/picker';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default function AddNew(props) {
  const { setTasks, setAddNewTask } = props;

  const handleAddTask = (e) => {
    console.info('save');
  };

  return (
    <View style={styles.addNew}>
      <Text>Allo</Text>
      <TextInput
        autoFocus={true}
        placeholder="Task Name"
        onChangeText={handleAddTask}
      />
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
    height: 200,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
  },
  buttons: {
    width: '80%',
    // height: 50,
    alignContent: 'space-between',
  },
  cancelBtn: {},
  saveBtn: {},
});
