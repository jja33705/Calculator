import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import InputBox from './components/InputBox';
import MenuBar from './components/MenuBar';
import ButtonBox from './components/ButtonBox';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  function changeInputValue(s: string) {
    setInputValue(s);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <InputBox inputValue={inputValue} />
      <MenuBar changeInputValue={changeInputValue} inputValue={inputValue} />
      <ButtonBox changeInputValue={changeInputValue} inputValue={inputValue} />
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
