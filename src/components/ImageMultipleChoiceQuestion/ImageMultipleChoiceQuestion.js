import { View, Text,  Alert } from 'react-native';
import React, { useState } from 'react';
import ImageOption from '../ImageOption';
import Button from '../Button';

import styles from './styles';
import propTypes from 'prop-types';

const ImageMultipleChoiceQuestion = ({ question, onCorrect, onWrong }) => {

  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {
      // Move to next question
      onCorrect();
      setSelected(null);
      
    } else {
      onWrong();
    }
  }

  return (
    <>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>

        {question.options.map((option) => (
          <ImageOption 
            image={option.image}
            text={option.text}
            key={option.id}
            // Compare initial state with data
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
        
      </View>
      <Button 
        text="Check"
        onPress={onButtonPress}
        disabled={!selected}
      />
    </>
  )
}

ImageMultipleChoiceQuestion.propTypes = {
  question: propTypes.shape({
    question: propTypes.string,
    options: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        text: propTypes.string,
        image: propTypes.string, 
        correct: propTypes.bool
      })
    ).isRequired,
  }).isRequired
}

export default ImageMultipleChoiceQuestion;