import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View } from 'react-native';
import Chip from './Chip';

const ChipGroup = ({ labels, setActive, activeLabel }) => {
  return (
    <View style={styles.chipGroup}>
      {labels.map((label) => (
        <Chip
          key={label}
          label={label}
          onPress={() => setActive(label)}
          isActive={label === activeLabel}
        />
      ))}
    </View>
  );
};

ChipGroup.propTypes = {
  setActive: PropTypes.func.isRequired,
  labels: PropTypes.array.isRequired,
  activeLabel: PropTypes.string.isRequired,
};

export default ChipGroup;

const styles = StyleSheet.create({
  chipGroup: {
    flexDirection: 'row',
  },
});
