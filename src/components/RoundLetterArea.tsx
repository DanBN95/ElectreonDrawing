import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import BaseText from './BaseText';
import { generateRandomLetter } from '@src/utils';
import { Button } from 'react-native-paper';
import useAppTheme from '@src/hooks/useAppTheme';

const RoundLetterArea = () => {
  const theme = useAppTheme();
  const [letter, setLetter] = useState<string>(generateRandomLetter());

  const handleRoundLetter = () => setLetter(generateRandomLetter());

  return (
    <View style={styles.container}>
      <View style={[styles.textContainer, { borderColor: theme.colors.onPrimary }]}>
        <BaseText variant="titleOne">{letter}</BaseText>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleRoundLetter}>
          <BaseText variant="bodyTwo">Raffle a Letter</BaseText>
        </Button>
      </View>
    </View>
  );
};

export default RoundLetterArea;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 2,
    height: 125,
    width: 125,
    borderRadius: 67,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 8,
    justifyContent: 'flex-end',
  },
});
