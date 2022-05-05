import { View, Text, Image } from 'react-native';
import React from 'react';
import ProgressBar from '../ProgressBar';
import heart from '../../../assets/images/heart.png'
import styles from './styles';

const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress}/>

      <Image source={heart} style={styles.icon} resizeMode="contain" />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  )
}

export default Header