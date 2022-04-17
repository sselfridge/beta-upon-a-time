import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View } from 'react-native';

const DeleteConfirm = ({ onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [disabledDel, setDisabled] = useState(true);
  useEffect(() => {
    let timeout;
    if (showConfirm) {
      setTimeout(() => {
        setDisabled(false);
      }, 700);
      timeout = setTimeout(() => {
        setShowConfirm(false);
        setDisabled(true);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showConfirm]);

  return (
    <View>
      {showConfirm ? (
        <Button
          color="red"
          title="Confirm?"
          disabled={disabledDel}
          onPress={onDelete}
        />
      ) : (
        <Button
          color="red"
          title="Delete"
          onPress={() => setShowConfirm(true)}
        />
      )}
    </View>
  );
};

DeleteConfirm.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteConfirm;
