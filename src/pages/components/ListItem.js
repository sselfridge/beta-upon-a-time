import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';

import Theme from '../../theme';
import gStyles from '../../utils/gStyles';
import DeleteConfirm from './shared/DeleteConfirm';

export default function ListItem(props) {
  const { task, removeTask, isSelected } = props;

  const [pressed, setPressed] = useState(false);

  return (
    <View styles={[styles.mainView, isSelected ? styles.selected : '']}>
      <View style={[gStyles.row]}>
        <Text style={styles.nameText}>{task.name}</Text>
        <View>
          <Text style={styles.nextText}>Next: </Text>
          <Text style={styles.lastText}>Last: </Text>
        </View>
      </View>
      {isSelected && (
        <View style={[gStyles.row, styles.selected]}>
          <Button color={Theme.primary} title="Mark done" />
          <Button color={Theme.secondary} title="Mark done at..." />
          <DeleteConfirm onDelete={removeTask} />
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
  selected: {
    backgroundColor: Theme.gray,
    marginBottom: 20,
    marginTop: 10,
  },
  nameText: {
    maxWidth: '65%',
    overflow: 'hidden',
    textAlign: 'left',
  },
});
