import { View, Text } from 'react-native'
import React from 'react';
import styles from './styles';
import propTypes from 'prop-types';

const BlankOption = ({ text }) => {
  return (
    
    <View style={styles.word}>
      <Text style={styles.text}>{text}</Text>
    </View>

  )
}

export default BlankOption