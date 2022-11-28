import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

type Props = {
  icon: string;
};

const ImageButton = ({ icon }: Props) => {
  const source =
    icon === 'history'
      ? require('../assets/icons/history.png')
      : require('../assets/icons/backspace.png');

  return (
    <TouchableOpacity style={styles.container}>
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
