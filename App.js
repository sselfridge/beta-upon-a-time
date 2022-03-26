import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import Main from './src/pages/Main';
import { useAppState } from '@react-native-community/hooks';

//mock data
import { tasks1 } from './src/models/mocklist';

export default function App() {
  const [tasks, setTasks] = useState(tasks1);
  const [completedTasks, setCompletedTasks] = useState([]);

  const currentAppState = useAppState();
  console.info('currentAppState: ', currentAppState);

  const handleBackBtn = () => {
    console.info('WE HAVE TO GO BACK APP.js!!');
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackBtn);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackBtn);
    };
  }, []);

  useEffect(() => {
    const hello = tasks;

    return () => {
      return `${completedTasks}`;
    };
  }, [completedTasks, tasks]);

  BackHandler.addEventListener('hardwareBackPress', function () {
    console.info('we have to go back!!!');
    return true;
  });

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
