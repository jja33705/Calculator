import React, { useState, useEffect } from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { getHistories, type History } from '../utils/asyncStorage';

type Props = {
  modalVisible: boolean;
  closeModal: () => void;
  changeInputValue: (s: string) => void;
};

const HistoryModal = ({
  modalVisible,
  closeModal,
  changeInputValue,
}: Props) => {
  const [historyList, setHistoryList] = useState<History[]>([]);

  async function getHistoryList() {
    try {
      const histories = await getHistories();
      setHistoryList(histories);
    } catch (err) {
      console.log(err);
    }
  }

  function onClickListItem(item: History) {
    return function () {
      changeInputValue(item.expression);
      closeModal();
    };
  }

  useEffect(() => {
    getHistoryList();
  }, [modalVisible]);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <View style={styles.listContainer}>
            <FlatList
              data={historyList}
              renderItem={({ item }: { item: History }) => (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={onClickListItem(item)}>
                  <Text style={styles.expression}>{item.expression}</Text>
                  <Text>=</Text>
                  <Text style={styles.result}>{item.result}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <TouchableOpacity onPress={closeModal} style={styles.button}>
            <Text style={styles.buttonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    height: '65%',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  expression: {
    fontSize: 22,
  },
  result: {
    fontSize: 22,
    color: 'limegreen',
  },
  button: {
    backgroundColor: 'pink',
    borderRadius: 15,
    paddingVertical: 7,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HistoryModal;
