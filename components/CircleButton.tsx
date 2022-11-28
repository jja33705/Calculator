import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CircleButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>1</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
});

export default CircleButton;
