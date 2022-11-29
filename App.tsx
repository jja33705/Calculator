import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import InputBox from './components/InputBox';
import MenuBar from './components/MenuBar';
import ButtonBox from './components/ButtonBox';
import HistoryModal from './components/HistoryModal';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function changeInputValue(s: string) {
    setInputValue(s);
  }

  function changeModalVisible(value: boolean) {
    return function () {
      setModalVisible(value);
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <HistoryModal
        modalVisible={modalVisible}
        closeModal={changeModalVisible(false)}
      />
      <InputBox inputValue={inputValue} />
      <MenuBar
        changeInputValue={changeInputValue}
        inputValue={inputValue}
        showModal={changeModalVisible(true)}
      />
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
