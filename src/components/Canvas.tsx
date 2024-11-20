import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Canvas = () => {
  return (
    <View style={styles.container}>
      <Text>Canvas</Text>
    </View>
  );
};

export default Canvas;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    borderWidth: 1,
  },
});
