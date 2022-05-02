import React, { useState, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import styles from './App.styles';
import questions from './assets/data/imageMulatipleChoiceQuestions';
import ImageOption from './src/components/ImageOption';
import Button from './src/components/Button';
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion';

const App = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You Win.");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex])
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const onWrong = () => {
    Alert.alert('Wrong');
  }
  
  
  return (
    <View style={styles.root}>

      <ImageMultipleChoiceQuestion 
        question={currentQuestion} 
        onCorrect={onCorrect}
        onWrong={onWrong}
      />

    </View>
  );
}

export default App;