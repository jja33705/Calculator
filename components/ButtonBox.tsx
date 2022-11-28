import React from 'react';
import { StyleSheet, View } from 'react-native';
import CircleButton from './CircleButton';

const ButtonBox = () => {
  return (
    <View style={styles.container}>
      <CircleButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
  },
});

export default ButtonBox;
