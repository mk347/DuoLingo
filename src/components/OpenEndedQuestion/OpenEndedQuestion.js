import { View, Text, Image, TextInput } from 'react-native';
import Button from '../Button'
import React, { useState } from 'react';
import styles from './styles';
import mascot from '../../../assets/images/mascot.png'
import propTypes from 'prop-types';

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {

  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
      setInput("");
    } else {
      onWrong();
    }
  }
  
  return (
    <>
      
      <Text style={styles.title}>Translate this sentence.</Text>

      <View style={styles.row}>

        <Image 
          source={mascot}
          style={styles.mascot}
          resizeMode="contain"
        /> 

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>

      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={input} 
          onChangeText={setInput}
          placeholder='Type in English'
          style={styles.textInput} 
          textAlignVertical="top"
          multiline
        />
      </View>

      <Button 
        text="Check"
        onPress={onButtonPress}
        disabled={false}
      />

    </>
  )
}

OpenEndedQuestion.propTypes = {
  question: propTypes.shape({
    id: propTypes.string,
    type: propTypes.string,
    text: propTypes.string, 
    answer: propTypes.string,
  }).isRequired,
  onCorrect: propTypes.func,
  onWrong: propTypes.func,
}

export default OpenEndedQuestion