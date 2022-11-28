import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
  textColor?: string;
  buttonColor?: string;
};

const CircleButton = ({
  text,
  onPress,
  textColor = 'black',
  buttonColor = 'ghostwhite',
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: buttonColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderRadius: 40,
    width: '21%',
    height: '18%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
  },
});

export default CircleButton;
