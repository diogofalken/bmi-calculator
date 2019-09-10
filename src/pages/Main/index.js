import React from 'react';
import {View, SafeAreaView, Text, StatusBar, Image} from 'react-native';

import styles from './styles';

import female from '../../assets/female.png';
import male from '../../assets/male.png';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Bmi Calculator</Text>

      <View style={styles.genderContainer}>
        <View style={styles.card}>
          <Image source={male} alt="male" />
          <Text style={styles.cardText}>Male</Text>
        </View>
        <View style={styles.card}>
          <Image source={female} alt="female" />
          <Text style={styles.cardText}>Female</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
