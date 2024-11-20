import { StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import { Button } from 'react-native-paper';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import AnimatedSvg from './animated-components/AnimatedSvg';
import AnimatedPath from './animated-components/AnimatedPath';
import { useCanvasGesture } from '@src/hooks/useCanvasGesture';

const Canvas = () => {
  const svgRef = useRef(null);
  const { pan, animatedProps } = useCanvasGesture();

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pan}>
        <Animated.View style={styles.board}>
          <AnimatedSvg ref={svgRef} width={300} height={300} style={styles.svgCanvas}>
            <AnimatedPath
              animatedProps={animatedProps}
              fill="transparent"
              stroke="black"
              strokeWidth="3"
            />
          </AnimatedSvg>
        </Animated.View>
      </GestureDetector>
      <View style={styles.buttonContainer}>
        <Button>Submit</Button>
      </View>
    </View>
  );
};

export default Canvas;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    rowGap: 20,
  },
  board: {
    flex: 3,
    borderWidth: 1,
    marginHorizontal: 8,
  },
  svgCanvas: {
    // backgroundColor: 'green',
  },
  buttonContainer: {
    flex: 1,
  },
});
