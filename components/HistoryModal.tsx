import React from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  modalVisible: boolean;
  closeModal: () => void;
};

const HistoryModal = ({ modalVisible, closeModal }: Props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View>
        <Text style={{ fontSize: 200 }}>굳</Text>
        <TouchableOpacity onPress={closeModal}>
          <Text>닫기</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

});

export default HistoryModal;
