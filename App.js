import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import Main from './src/pages/Main';
import { useAppState } from '@react-native-community/hooks';

import TasksContextProvider from './src/models/tasks-context';

//mock data
import { tasks1, completedTasks as mockComplete } from './src/models/mocklist';
import { sortTasksByTime } from './src/utils/helperFuncs';

export default function App() {
  const [taskList, setTaskList] = useState(tasks1);
  const [completedTasks, setCompletedTasks] = useState(mockComplete);
  const [tasks, setTasks] = useState([]);

  const currentAppState = useAppState();
  console.info('currentAppState: ', currentAppState);

  useEffect(() => {
    const hello = tasks;

    return () => {
      return `${completedTasks}`;
    };
  }, [completedTasks, tasks]);

  useEffect(() => {
    try {
      sortTasksByTime(completedTasks);
      const newTasks = [];
      taskList.forEach((t) => {
        const lastComplete = completedTasks.find((c) => t.id === c.id);

        newTasks.push({ ...t, lastDone: lastComplete?.time });
      });
      setTasks(newTasks);
    } catch (error) {
      console.info(error);
    }
  }, [taskList, completedTasks]);

  return (
    <TasksContextProvider>
      <Main tasks={tasks} />
    </TasksContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
