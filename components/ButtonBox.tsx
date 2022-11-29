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

  function onPressBracketButton() {
    if (inputValue.length === 0) {
      changeInputValue('(');
      return;
    }
    const lastLetter = inputValue[inputValue.length - 1];
    if (['%', '÷', '×', '-', '+', '('].includes(lastLetter)) {
      changeInputValue(inputValue + '(');
      return;
    }
    if (lastLetter === '.') {
      return;
    }
    let leftBracketCount = 0;
    let rightBracketCount = 0;
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] === '(') {
        leftBracketCount++;
      } else if (inputValue[i] === ')') {
        rightBracketCount++;
      }
    }
    if (leftBracketCount > rightBracketCount) {
      changeInputValue(inputValue + ')');
    }
  }

  function onPressChangeSignButton() {
    let firstIndex = 0;
    for (let i = inputValue.length; i >= 0; i--) {
      if (inputValue[i] === '(') {
        firstIndex = i + 1;
        break;
      }
    }
    if (inputValue[firstIndex] === '-') {
      let isAllNumber = true;
      for (let i = firstIndex + 1; i < inputValue.length; i++) {
        if (
          (inputValue[i] > '9' || inputValue[i] < '0') &&
          inputValue[i] !== '.'
        ) {
          isAllNumber = false;
          break;
        }
      }
      if (isAllNumber) {
        changeInputValue(
          inputValue.slice(0, firstIndex) + inputValue.slice(firstIndex + 1),
        );
        return;
      }
    }
    const lastLetter = inputValue[inputValue.length - 1];
    if (lastLetter >= '0' && lastLetter <= '9') {
      let firstNumberIndex = 0;
      for (let i = inputValue.length - 2; i >= 1; i--) {
        if (
          (inputValue[i] < '0' || inputValue[i] > '9') &&
          inputValue !== '.'
        ) {
          firstNumberIndex = i + 1;
          break;
        }
      }
      changeInputValue(
        `${inputValue.slice(0, firstNumberIndex)}(-${inputValue.slice(
          firstNumberIndex,
          inputValue.length,
        )})`,
      );
    }
    if (lastLetter === ')') {
      const leftBracketIndex = inputValue.lastIndexOf('(');
      if (inputValue[leftBracketIndex + 1] !== '-') {
        return;
      }
      let isNumber = true;
      for (let i = leftBracketIndex + 2; i < inputValue.length - 1; i++) {
        if (inputValue[i] > '9' || inputValue[i] < '0') {
          isNumber = false;
          break;
        }
      }
      if (isNumber) {
        const number = inputValue.slice(
          leftBracketIndex + 2,
          inputValue.length - 1,
        );
        changeInputValue(inputValue.slice(0, leftBracketIndex) + number);
      }
    }
  }

  return (
    <View style={styles.container}>
      <CircleButton text="C" textColor="red" onPress={clearInputValue} />
      <CircleButton
        text="()"
        textColor="limegreen"
        onPress={onPressBracketButton}
      />
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
