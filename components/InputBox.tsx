import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const InputBox = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="수식을 입력하세요." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 30,
  },
});

export default InputBox;
