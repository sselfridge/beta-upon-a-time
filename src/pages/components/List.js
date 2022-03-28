import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import Theme from '../../theme';

export default function ListItem(props) {
  const { task, removeTask } = props;

  const [pressed, setPressed] = useState(false);

  return (
    <View style={[styles.mainView, pressed ? styles.gray : {}]}>
      <Pressable
        onPressIn={() => setPressed(true)}
        onLongPress={() => removeTask(task.id)}
        onPressOut={() => setPressed(false)}
      >
        <Text style={styles.text}>{task.name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // width: '100%',
    maxHeight: 40,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'left',
  },
  plusIcon: {
    position: 'absolute',
    bottom: '5%',
    right: '8%',
  },
  gray: {
    backgroundColor: Theme.gray,
  },
  text: {
    textAlign: 'left',
  },
});
