import { View, Text, Pressable } from 'react-native'
import React from 'react';
import styles from './styles';
import propTypes from 'prop-types';

const BlankOption = ({ text, onPress, isSelected }) => {

  return (
    <Pressable style={[styles.word, isSelected ? styles.wordSelected : []]} onPress={onPress}>
      <Text style={[styles.text, isSelected ? styles.textSelected : []]}>{text}</Text>
    </Pressable>

  )
}

export default BlankOption;