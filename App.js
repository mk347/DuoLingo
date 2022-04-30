import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './App.styles';

import ImageOption from './src/components/ImageOption';

// All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
const App = () => {

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>

      <View style={styles.optionsContainer}>
        <ImageOption />
      </View>

    </View>
  );
}

export default App;
