import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { tasks1 } from '../models/mocklist';
import Theme from '../theme';

import AddNew from './components/AddNew';
import List from './components/List';
export default function Main() {
  const [showAddNew, setShowAddNew] = useState(true);

  const [tasks, setTasks] = useState(tasks1);
  const [currentDuration, setCurrDur] = useState('');
  const handleAddTask = (e) => {
    // console.info('Add new');
    // setTasks((t) => {
    //   const ts = t.slice();
    //   const newT = new Date();
    //   ts.push({ title: `${newT}` });
    //   console.info(tasks.length);
    //   return ts;
    // });
    setShowAddNew(true);
  };
  return (
    <View style={styles.mainView}>
      <Text>Open up to start working on das app!</Text>
      {/* <View style={styles.list}>
        {tasks.map((task, i) => {
          return <List key={i} task={task} />;
        })}
      </View> */}

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
