import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Theme from '../../../theme';

const TimePicker = ({ setTime }) => {
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

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View> */}
      <View>
        <Button
          color={Theme.primary}
          onPress={showTimepicker}
          title="Set time"
        />
      </View>
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
