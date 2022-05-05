import { View, Text, Image } from 'react-native'
import React, { useState } from 'react';
import BlankOption from '../BlankOption/BlankOption';
import propTypes from 'prop-types';
import styles from './styles';
import sitting from '../../../assets/images/sitting.png'
import Button from '../Button';

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {

  const [selected, setSelected] = useState(false);

  const onButtonPress = () => {
    if (selected === question.correct) {
      // Move to next question
      onCorrect();
    
    } else {
      onWrong();
    }
  }

  return (

      <View style={styles.root}>

        <Text style={styles.title}>Complete the sentence</Text>

        <Image 
          source={sitting}
          style={styles.sitting}
          resizeMode="contain"
        />

        <View style={styles.wordPuzzleContainer}>
          <Text style={styles.wordPuzzleText}>{question.sentence}</Text>
          <View style={styles.wordPuzzleBlank}>
            
            {selected && (
            <BlankOption 
              text={selected}
              onPress={() => setSelected(selected)} 
            />
            )}
          

          </View>
        </View>

        <View style={styles.wordBlank}>
        </View>
      
        <View style={styles.wordContainer}>
          {question.options.map((option, index) => (
            <BlankOption 
              text={option}
              key={index}
              onPress={() => setSelected(option)}
              isSelected={selected === option}
            />
          ))}
        </View>

        <Button 
          text="Check"
          onPress={onButtonPress}
          disabled={!selected}
        />

        
      </View>

  )
}

export default FillInTheBlank