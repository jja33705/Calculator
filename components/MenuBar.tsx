import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageButton from './ImageButton';

const MenuBar = () => {
  return (
    <View style={styles.container}>
      <ImageButton icon="history" />
      <ImageButton icon="backspace" />
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
