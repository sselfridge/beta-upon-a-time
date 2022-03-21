import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function List(props) {
  const { task } = props;

  return (
    <View style={styles.mainView}>
      <Text>{task.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    maxHeight: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  plusIcon: {
    position: 'absolute',
    bottom: '5%',
    right: '8%',
  },
});
