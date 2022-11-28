import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

type Props = {
  inputValue: string;
};

const InputBox = ({ inputValue }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        editable={false}
        style={styles.textInput}
        placeholder="수식을 입력하세요."
        value={inputValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 40,
    color: 'black',
  },
});

export default InputBox;
