import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { tasks1 } from '../models/mocklist';
import Theme from '../theme';

import AddNew from './components/AddNew';
import ListItem from './components/List';
export default function Main() {
  const [showAddNew, setShowAddNew] = useState(true);

  const [tasks, setTasks] = useState(tasks1);
  const [currentDuration, setCurrDur] = useState('');
  const handleAddTask = (e) => {
    setShowAddNew(true);
  };

  const removeTask = (id) => {
    const taskIndex = tasks.findIndex((t) => t.id === id);
    console.info('--------------');
    console.info('id:', id);
    console.info('taskIndex: ', taskIndex);
    console.info(tasks);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }
    setTasks((old) => {
      const newTasks = old.slice();
      newTasks.splice(taskIndex, 1);
      return newTasks;
    });
  };

  return (
    <View style={styles.mainView}>
      <Text>Open up to start working on das app!</Text>
      <View style={styles.list}>
        {tasks.map((task, i) => {
          return <ListItem key={i} task={task} removeTask={removeTask} />;
        })}
      </View>

      {!showAddNew ? (
        <AntDesign
          style={styles.plusIcon}
          onPress={handleAddTask}
          name="pluscircle"
          size={48}
          color={Theme.primary}
        />
      ) : (
        <AddNew setTasks={setTasks} setShowAddNew={setShowAddNew} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Theme.paper,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  plusIcon: {
    position: 'absolute',
    bottom: '5%',
    right: '8%',
  },
  list: {
    width: '80%',
    height: '50%',
  },
  picker: {
    width: 300,
    height: 100,
  },
  row: {
    flexDirection: 'row',
  },
});
