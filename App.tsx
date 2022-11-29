import React, { useState } from 'react';
import { SafeAreaView, Modal, StatusBar, StyleSheet, Text } from 'react-native';
import InputBox from './components/InputBox';
import MenuBar from './components/MenuBar';
import ButtonBox from './components/ButtonBox';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function changeInputValue(s: string) {
    setInputValue(s);
  }

  function showModal() {
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Text style={{ fontSize: 200 }}>굳</Text>
      </Modal>
      <InputBox inputValue={inputValue} />
      <MenuBar
        changeInputValue={changeInputValue}
        inputValue={inputValue}
        showModal={showModal}
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
