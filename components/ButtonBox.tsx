import React from 'react';
import { StyleSheet, View } from 'react-native';
import CircleButton from './CircleButton';
import { calculate } from '../utils/calculation';
import {
  validateBeforeCalculate,
  validateNewLetter,
} from '../utils/validation';

type Props = {
  changeInputValue: (c: string) => void;
  inputValue: string;
};

const ButtonBox = ({ changeInputValue, inputValue }: Props) => {
  function inputOneLetter(newLetter: string) {
    return function () {
      if (validateNewLetter(inputValue, newLetter)) {
        changeInputValue(inputValue + newLetter);
      } else {
        console.log('유효하지 않은 입력입니다.');
      }
    };
  }

  function clearInputValue() {
    changeInputValue('');
  }

  function onPressCalculateButton() {
    if (validateBeforeCalculate(inputValue)) {
      const result = calculate(inputValue);
      changeInputValue(result);
    } else {
      console.log('유효하지 않은 수식입니다.' + inputValue);
    }
  }

  function onPressChangeSignButton() {
    // console.log('누름');
    // const lastLetter = inputValue[inputValue.length - 1];
    // if (lastLetter >= '0' && lastLetter <= '9') {
    //   let firstNumberIndex = 0;
    //   for (let i = inputValue.length - 2; i >= 1; i--) {
    //     if (
    //       (inputValue[i] < '0' || inputValue[i] > '9') &&
    //       inputValue !== '.'
    //     ) {
    //       firstNumberIndex = i + 1;
    //       break;
    //     }
    //   }
    //   changeInputValue(
    //     `${inputValue.slice(0, firstNumberIndex)}(-${inputValue.slice(
    //       firstNumberIndex,
    //       inputValue.length,
    //     )})`,
    //   );
    // }
  }

  return (
    <View style={styles.container}>
      <CircleButton text="C" textColor="red" onPress={clearInputValue} />
      <CircleButton text="()" textColor="limegreen" onPress={() => {}} />
      <CircleButton
        text="%"
        textColor="limegreen"
        onPress={inputOneLetter('%')}
      />
      <CircleButton
        text="÷"
        textColor="limegreen"
        onPress={inputOneLetter('÷')}
      />
      <CircleButton text="7" onPress={inputOneLetter('7')} />
      <CircleButton text="8" onPress={inputOneLetter('8')} />
      <CircleButton text="9" onPress={inputOneLetter('9')} />
      <CircleButton
        text="×"
        textColor="limegreen"
        onPress={inputOneLetter('×')}
      />
      <CircleButton text="4" onPress={inputOneLetter('4')} />
      <CircleButton text="5" onPress={inputOneLetter('5')} />
      <CircleButton text="6" onPress={inputOneLetter('6')} />
      <CircleButton
        text="-"
        textColor="limegreen"
        onPress={inputOneLetter('-')}
      />
      <CircleButton text="1" onPress={inputOneLetter('1')} />
      <CircleButton text="2" onPress={inputOneLetter('2')} />
      <CircleButton text="3" onPress={inputOneLetter('3')} />
      <CircleButton
        text="+"
        textColor="limegreen"
        onPress={inputOneLetter('+')}
      />
      <CircleButton text="+/-" onPress={onPressChangeSignButton} />
      <CircleButton text="0" onPress={inputOneLetter('0')} />
      <CircleButton text="." onPress={inputOneLetter('.')} />
      <CircleButton
        text="="
        buttonColor="limegreen"
        onPress={onPressCalculateButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    flexDirection: 'row',
    margin: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
});

export default ButtonBox;
