import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import BaseText from './BaseText';
import { generateRandomLetter } from '@src/utils';
import { Button } from 'react-native-paper';

const RoundLetterArea = () => {
  const [letter, setLetter] = useState<string>(generateRandomLetter());

  const handleRoundLetter = () => setLetter(generateRandomLetter());

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <BaseText variant="titleTwo">{letter}</BaseText>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleRoundLetter}>Round Letter</Button>
      </View>
    </View>
  );
};

export default RoundLetterArea;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    height: 125,
    width: 125,
    borderRadius: '50%',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    right: 0,
    paddingRight: 4,
    justifyContent: 'flex-end',
  },
});
