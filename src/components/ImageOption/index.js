import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const ImageOption = ({ image, text, isSelected, onPress }) => (
  <Pressable 
    onPress={onPress}
    style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}
  >
    <Image 
      source={{ uri: image }}
      style={styles.optionImage}
      resizeMode="contain"
    />
    <Text style={isSelected ? styles.selectedText : styles.optionText}>{text}</Text>
  </Pressable>
)

ImageOption.propTypes = {
  image: PropTypes.string.isRequired, 
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {}
};

export default ImageOption;