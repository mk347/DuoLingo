import { Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import propTypes from 'prop-types';

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable 
      style={[styles.container, disabled ? styles.disabledContainer : {}]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

Button.propTypes = {
  text: propTypes.string.isRequired,
  onPress: propTypes.func,
  disabled: propTypes.bool,
}

Button.defaultProps = {
  text: 'Default',
  onPress: () => {},
  disabled: false,
}

export default Button;