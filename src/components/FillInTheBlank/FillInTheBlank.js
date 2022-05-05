import { View, Text, Image } from 'react-native'
import React from 'react';
import BlankOption from '../BlankOption/BlankOption';
import WordPuzzle from '../WordPuzzle/WordPuzzle';
import propTypes from 'prop-types';
import styles from './styles';
import sitting from '../../../assets/images/sitting.png'

const FillInTheBlank = ({ question }) => {
  return (

      <View style={styles.root}>

        <Text style={styles.title}>Complete the sentence</Text>

        <Image 
          source={sitting}
          style={styles.sitting}
          resizeMode="contain"
        />

        <View style={styles.wordPuzzleContainer}>
          {question.parts.map((part, index) => (
            <WordPuzzle 
              text={part.text}
              key={index}
            />
          ))}
        </View>
      
        <View style={styles.wordContainer}>
          {question.options.map((option, index) => (
            <BlankOption 
              text={option}
              key={index}
            />
          ))}
        </View>
        
      </View>

  )
}

export default FillInTheBlank