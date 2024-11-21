import { StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import { Button, IconButton } from 'react-native-paper';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import AnimatedSvg from './animated-components/AnimatedSvg';
import AnimatedPath from './animated-components/AnimatedPath';
import { useCanvasGesture } from '@src/hooks/useCanvasGesture';
import useAppTheme from '@src/hooks/useAppTheme';

const Canvas = () => {
  const theme = useAppTheme();
  const svgRef = useRef(null);
  const { pan, animatedProps } = useCanvasGesture();

  return (
    <View style={styles.container}>
      <Animated.View style={styles.board}>
        <GestureDetector gesture={pan}>
          <AnimatedSvg
            ref={svgRef}
            width={'100%'}
            height={'100%'}
            style={{ backgroundColor: theme.colors.boardBackground }}
          >
            <AnimatedPath
              animatedProps={animatedProps}
              fill="transparent"
              stroke="black"
              strokeWidth="3"
            />
          </AnimatedSvg>
        </GestureDetector>
        <View style={styles.deleteButton}>
          <IconButton icon="undo" size={24} onPress={() => console.log('Icon Pressed')} />
        </View>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <Button icon="camera">Submit</Button>
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
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 20,
  },
  buttonContainer: {
    flex: 1,
  },
});
