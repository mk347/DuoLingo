import React, { useState, useEffect } from 'react';
import { Text, View, Alert, ActivityIndicator } from 'react-native';
import styles from './App.styles';

import ImageOption from './src/components/ImageOption';
import Button from './src/components/Button';
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion';
import OpenEndedQuestion from './src/components/OpenEndedQuestion';
import Header from './src/components/Header';

import questions from './assets/data/allQuestions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FillInTheBlank from './src/components/FillInTheBlank';
import BlankOption from './src/components/BlankOption/BlankOption';

const App = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You Win!", "", [
        {
          text: "Play again",
          onPress: restart,  
        },
      ]);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex])
    }
  }, [currentQuestionIndex]);


  // Empty array only load once
  useEffect(() => {
    loadData();
  }, []);

  // Will run saveData every time lives, or currentQuestionIndex change
  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);


  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("Game Over", "", [
        {
          text: "Try again",
          onPress: restart,  
        },
      ]);
    } else {
      Alert.alert('Wrong');
      setLives(lives - 1);
    } 
  };

  const saveData = async () => {
    await AsyncStorage.setItem('lives', lives.toString());
    await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
  }

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem('lives');
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }

    const currentQuestionIndex = await AsyncStorage.getItem('currentQuestionIndex');
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }

    setHasLoaded(true);
  };

  if (!hasLoaded) {
   return (<ActivityIndicator />);
  }
  
  return (
    <View style={styles.root}>

      <Header progress={currentQuestionIndex / questions.length} lives={lives} />

      {/* {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion 
          question={currentQuestion} 
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestion 
          question={currentQuestion} 
          onCorrect={onCorrect}
          onWrong={onWrong}      
        />
      ) : null} */}

      {currentQuestion.type === "FILL_IN_THE_BLANK" ? (
        <FillInTheBlank 
          question={currentQuestion} 
          onCorrect={onCorrect}      
          onWrong={onWrong}
        />
      ) : null}

    </View>
  );
}

export default App;