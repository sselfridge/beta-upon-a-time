import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { tasks1 } from '../models/mocklist';
import Theme from '../theme';

import { TasksContext } from '../models/tasks-context';

import AddNew from './components/AddNew';
import ListItem from './components/ListItem';

export default function Main() {
  const [showAddNew, setShowAddNew] = useState(false);

  const TaskContxt = useContext(TasksContext);
  console.info('TasksContext: ');
  console.info(TaskContxt.tasks);
  console.info('End Task Context');

  const [tasks, setTasks] = useState(tasks1);
  const [currentDuration, setCurrDur] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

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

  const handleListPress = (index) => {
    setSelectedItem((curr) => {
      if (index === curr) {
        return null;
      } else {
        return index;
      }
    });
  };

  const renderItem = (itemProps) => {
    const { index, item } = itemProps;
    console.info('itemProps: ', itemProps);

    //   <Pressable
    //   style={[styles.mainView, pressed ? styles.gray : {}]}
    //   onPressIn={() => setPressed(true)}
    //   onLongPress={() => removeTask(task.id)}
    //   onPressOut={() => setPressed(false)}
    // >
    const isSelected = selectedItem === index;
    const style = isSelected ? styles.selectedItem : '';
    return (
      <Pressable style={style} onPress={() => handleListPress(index)}>
        <ListItem
          task={item}
          removeTask={() => removeTask(item.id)}
          isSelected={isSelected}
        />
      </Pressable>
    );
  };

  const FlatListHeader = () => {
    return (
      <View
        elevation={1}
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.listHeaderView}
      >
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={styles.listHeaderText}
        >
          Upcoming Tasks
        </Text>
      </View>
    );
  };

  const FlatListSep = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.mainView}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={tasks}
          ListHeaderComponent={FlatListHeader}
          // ItemSeparatorComponent={FlatListSep}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedItem}
        />
      </SafeAreaView>

      <AntDesign
        style={styles.plusIcon}
        onPress={handleAddTask}
        name="pluscircle"
        size={48}
        color={Theme.primary}
      />

      <AddNew
        setTasks={setTasks}
        showAddNew={showAddNew}
        setShowAddNew={setShowAddNew}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Theme.paper,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    marginTop: 150,
    marginHorizontal: 15,
  },
  plusIcon: {
    position: 'absolute',
    bottom: '5%',
    right: '8%',
  },
  listHeaderView: {
    height: 100,
    width: '97%',
    margin: 5,
    backgroundColor: '#fff',
    borderColor: 'black',
    alignSelf: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 16,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 7.49,
  },
  listHeaderText: {
    fontSize: 40,
    fontWeight: '800',
    flex: 1,
    alignSelf: 'center',
    paddingTop: 15,
  },

  separator: {
    height: 40,
    backgroundColor: 'red',
  },
  selectedItem: {
    marginBottom: 25,
    backgroundColor: Theme.gray,
  },
  picker: {
    width: 300,
    height: 100,
  },
  row: {
    flexDirection: 'row',
  },
});
