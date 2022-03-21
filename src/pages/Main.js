import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { tasks1 } from '../models/mocklist';

import AddNew from './components/AddNew';
import List from './components/List';
export default function Main() {
  const [addNewTask, setAddNewTask] = useState(false);

  const [tasks, setTasks] = useState(tasks1);

  const handleAddTask = (e) => {
    // console.info('Add new');
    // setTasks((t) => {
    //   const ts = t.slice();
    //   const newT = new Date();
    //   ts.push({ title: `${newT}` });
    //   console.info(tasks.length);
    //   return ts;
    // });
    setAddNewTask(true);
  };

  console.info(tasks.length);

  return (
    <View style={styles.mainView}>
      <Text>Open up to start working on das app!</Text>
      <View style={styles.list}>
        {tasks.map((task, i) => {
          return <List key={i} task={task} />;
        })}
      </View>
      {!addNewTask ? (
        <AntDesign
          style={styles.plusIcon}
          onPress={handleAddTask}
          name="pluscircle"
          size={48}
          color="blue"
        />
      ) : (
        <AddNew setTasks={setTasks} setAddNewTask={setAddNewTask} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fafafa',
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
});
