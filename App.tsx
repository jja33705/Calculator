import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import InputBox from './components/InputBox';
import MenuBar from './components/MenuBar';
import ButtonBox from './components/ButtonBox';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <InputBox />
      <MenuBar />
      <ButtonBox />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
