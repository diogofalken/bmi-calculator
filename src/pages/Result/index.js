import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import styles from './styles';

export default function Result({navigation}) {
  const bmi = navigation.getParam('bmi');
  const age = navigation.getParam('age');
  const gender = navigation.getParam('gender');
  const [resultText, setResultText] = useState('');
  const [resultTitle, setResultTitle] = useState('');

  useEffect(() => {
    // is a man from [18,34]
    if (age > 18 && age < 34 && gender === 0) {
      if (bmi >= 23.0 && bmi <= 25.9) {
        setResultTitle('Normal');
        setResultText('You have a normal body weight. Good job!');
      } else if (bmi > 25.9) {
        setResultTitle('Overweight');
        setResultText(
          'You have a higher than normal body weight. Try to exercise more.',
        );
      } else {
        setResultTitle('Underweight');
        setResultText(
          'You have a lower than normal body weight. You can eat a bit more!',
        );
      }
    }
    // is a women
    else {
      if (bmi >= 15.5 && bmi <= 24.9) {
        setResultTitle('Normal');
        setResultText('You have a normal body weight. Good job!');
      } else if (bmi > 24.9) {
        setResultTitle('Overweight');
        setResultText(
          'You have a higher than normal body weight. Try to exercise more.',
        );
      } else {
        setResultTitle('Underweight');
        setResultText(
          'You have a lower than normal body weight. You can eat a bit more!',
        );
      }
    }
  });

  function handleReCalculate() {
    navigation.navigate('Main');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>Result</Text>
      <View style={styles.mainCard}>
        <Text style={styles.resultTitle}>{resultTitle}</Text>
        <Text style={styles.resultBMI}>{bmi.toFixed(2)}</Text>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <TouchableOpacity
        onPress={handleReCalculate}
        style={styles.reCalculateContainer}>
        <Text style={styles.reCalculateText}>Re-Calculate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
