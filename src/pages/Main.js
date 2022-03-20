import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function Main() {
  const [addNewTask, setAddNewTask] = useState(false);

  const handleAddTask = (e) => {
    console.info(e.target);
  };

  return (
    <View style={styles.mainView}>
      <Text>Open up Main dot js to start working on mein app!</Text>
      <AntDesign
        style={styles.plusIcon}
        onPress={handleAddTask}
        name="pluscircle"
        size={48}
        color="blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  plusIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
