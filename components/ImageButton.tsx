import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

type Props = {
  icon: string;
  onPress: () => void;
};

const ImageButton = ({ icon, onPress }: Props) => {
  const source =
    icon === 'history'
      ? require('../assets/icons/history.png')
      : require('../assets/icons/backspace.png');

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={source} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    borderRadius: 50,
  },
});

export default ImageButton;
