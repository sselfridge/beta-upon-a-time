import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../../../theme';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Chip = ({
  label,
  onPress,
  chipContainerStyle,
  chipTextStyle,
  isActive,
}) => {
  const style = [styles.chip, isActive ? styles.active : styles.inactive];
  return (
    <TouchableOpacity style={[...style, chipContainerStyle]} onPress={onPress}>
      <Text style={[styles.chipLabel, chipTextStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    justifyContent: 'center',
    borderRadius: 16,
    paddingLeft: 12,
    paddingRight: 12,
    height: 32,
    margin: 4,
  },
  active: {
    backgroundColor: Theme.primary,
  },
  inactive: {
    backgroundColor: Theme.gray,
  },
});
