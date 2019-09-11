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

  function handleReCalculate() {
    navigation.navigate('Main');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>Result</Text>
      <View style={styles.mainCard}>
        <Text style={styles.resultTitle}>Result</Text>
        <Text style={styles.resultBMI}>{bmi.toFixed(2)}</Text>
        <Text style={styles.resultText}>
          You have a normal BMI. Keep it up!
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleReCalculate}
        style={styles.reCalculateContainer}>
        <Text style={styles.reCalculateText}>Re-Calculate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
