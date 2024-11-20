import { StyleSheet, View } from 'react-native';
import React from 'react';
import RoundLetterArea from '@src/components/RoundLetterArea';
import Canvas from '@src/components/Canvas';

const DrawingScreen = () => {
  return (
    <View style={styles.container}>
      <RoundLetterArea />
      <Canvas />
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
