import React from 'react';
import { View, StyleSheet } from 'react-native';

const MenuBar = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
  },
});

export default MenuBar;
