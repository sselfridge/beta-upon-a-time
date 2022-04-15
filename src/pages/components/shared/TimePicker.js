import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, Button, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Theme from '../../../theme';
import { getTimeString } from '../../../utils/Time';

const TimePicker = ({ setTime, viewStyle, textStyle, time }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.info('currentDate: ', currentDate);
    setShow(false);
    if (currentDate) {
      setDate(currentDate);
      setTime(currentDate);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimePicker = () => {
    showMode('time');
  };

  return (
    <View style={viewStyle}>
      <Pressable onPress={showTimePicker}>
        <Text style={textStyle}>{`${getTimeString(time)}`}</Text>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          onChange={onChange}
          color={Theme.secondary}
        />
      )}
    </View>
  );
};

TimePicker.propTypes = {
  setTime: PropTypes.func.isRequired,
};

export default TimePicker;
