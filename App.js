import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/pages/Main';

//mock data
import { tasks1 } from './src/models/mocklist';

export default function App() {
  const [tasks, setTasks] = useState(tasks1);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const hello = tasks;

    return () => {
      return `${completedTasks}`;
    };
  }, [completedTasks, tasks]);

  return <Main />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
