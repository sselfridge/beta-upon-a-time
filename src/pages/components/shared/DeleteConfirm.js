import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View, Pressable } from 'react-native';

//TODO eventually add progress on delete delay:
// https://stackoverflow.com/questions/33778835/radial-wipe-with-pure-css-if-not-svg-alternative

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
        // Prevent tapping disabled confirm from propagating to parent component
        <Pressable onPress={(e) => e.preventDefault()}>
          <Button
            color="red"
            title="Confirm?"
            disabled={disabledDel}
            onPress={(e) => {
              if (!disabledDel) {
                onDelete();
              }
            }}
          />
        </Pressable>
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
