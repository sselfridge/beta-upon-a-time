import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';

import Theme from '../../theme';
import gStyles from '../../utils/gStyles';

export default function ListItem(props) {
  const { task, removeTask, isSelected } = props;

  const [pressed, setPressed] = useState(false);

  return (
    <View styles={styles.mainView}>
      <View style={[gStyles.row, isSelected ? styles.gray : '']}>
        <Text style={styles.text}>{task.name}</Text>
        <View>
          <Text style={styles.nextText}>Next: </Text>
          <Text style={styles.lastText}>Last: </Text>
        </View>
      </View>
      {isSelected && (
        <View style={gStyles.row}>
          <Button title="Mark done" />
          <Button title="Mark done at..." />
        </View>
      )}
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
