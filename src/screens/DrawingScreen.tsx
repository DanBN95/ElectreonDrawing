import { StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import RoundLetterArea from '@src/components/RoundLetterArea';
import Canvas from '@src/components/Canvas';
import { generateRandomLetter } from '@src/utils';

const DrawingScreen = () => {
  const [letter, setLetter] = useState<string>(generateRandomLetter());

  const handleOCR = useCallback(async (base64: string) => {}, []);
  return (
    <View style={styles.container}>
      <RoundLetterArea {...{ letter, setLetter }} />
      <Canvas OCRTrigger={handleOCR} />
    </View>
  );
};

export default DrawingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
});
