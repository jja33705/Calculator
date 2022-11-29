import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageButton from './ImageButton';

type Props = {
  changeInputValue: (s: string) => void;
  inputValue: string;
  showModal: () => void;
};

const MenuBar = ({ changeInputValue, inputValue, showModal }: Props) => {
  function onPressBackSpace() {
    if (inputValue.length <= 0) {
      return;
    }
    changeInputValue(inputValue.slice(0, -1));
  }

  return (
    <View style={styles.container}>
      <ImageButton icon="history" onPress={showModal} />
      <ImageButton icon="backspace" onPress={onPressBackSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default MenuBar;
