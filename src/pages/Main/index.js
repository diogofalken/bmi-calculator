import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import {View, SafeAreaView, Text, StatusBar, Image} from 'react-native';

import styles from './styles';

import female from '../../assets/female.png';
import male from '../../assets/male.png';

export default function Main() {
  const [height, setHeight] = useState(170);

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

      <View style={styles.heightContainer}>
        <Text style={styles.cardText}>Height</Text>
        <Text>
          <Text style={styles.heightValue}>{height}</Text>
          <Text style={styles.heightMeasure}>cm</Text>
        </Text>
        <Slider
          style={{width: 312, height: 20}}
          minimumValue={140}
          maximumValue={205}
          value={height}
          step={1}
          minimumTrackTintColor="#AE6997"
          maximumTrackTintColor="#FFFFFF"
          onValueChange={value => setHeight(value)}
        />
      </View>
    </SafeAreaView>
  );
}
