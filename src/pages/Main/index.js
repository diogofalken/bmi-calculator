import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import female from '../../assets/female.png';
import male from '../../assets/male.png';

export default function Main() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(20);

  // flag = 0 for weight
  // flag = 1 for age
  function handlePlus(flag) {
    flag === 0 ? setWeight(weight + 1) : setAge(age + 1);
  }

  // flag = 0 for weight
  // flag = 1 for age
  function handleMinus(flag) {
    flag === 0 ? setWeight(weight - 1) : setAge(age - 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Bmi Calculator</Text>

      <View style={styles.smallContainer}>
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
          <Text style={styles.cardValue}>{height}</Text>
          <Text style={styles.cardMeasure}>cm</Text>
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

      <View style={styles.smallContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Weight</Text>
          <Text style={{marginTop: 20}}>
            <Text style={styles.cardValue}>{weight}</Text>
            <Text style={styles.cardMeasure}>kg</Text>
          </Text>
          <View style={[styles.buttonsContainer, {marginTop: 20}]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleMinus(0)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePlus(0)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Age</Text>
          <Text style={{marginTop: 20}}>
            <Text style={styles.cardValue}>{age}</Text>
          </Text>
          <View style={[styles.buttonsContainer, {marginTop: 20}]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleMinus(1)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePlus(1)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
