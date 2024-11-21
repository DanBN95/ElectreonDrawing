import { StyleSheet, View } from 'react-native';
import React, { memo, useRef } from 'react';
import { Button, IconButton } from 'react-native-paper';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import AnimatedSvg from './animated-components/AnimatedSvg';
import AnimatedPath from './animated-components/AnimatedPath';
import { useCanvasGesture } from '@src/hooks/useCanvasGesture';
import useAppTheme from '@src/hooks/useAppTheme';
import { captureRef } from 'react-native-view-shot';
import BaseText from './BaseText';

type CanvasProps = {
  OCRTrigger: (base64: string) => void;
  isLoading?: boolean;
};

const Canvas = ({ OCRTrigger, isLoading }: CanvasProps) => {
  const theme = useAppTheme();
  const svgRef = useRef(null);
  const { pan, animatedProps, onUndo, onRemoveEntirely } = useCanvasGesture();

  const onCapture = async () => {
    try {
      const base64 = await captureRef(svgRef, {
        format: 'png',
        quality: 1.0,
        result: 'base64',
      });
      OCRTrigger(base64);
    } catch (err) {
      //TODO: Add error handling
      console.log('capture image went wrong', err);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={styles.board}>
        <GestureDetector gesture={pan}>
          <AnimatedSvg
            ref={svgRef}
            width="100%"
            height="100%"
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
        <View style={styles.deleteButtonContainer}>
          <IconButton icon="undo" size={20} onPress={onUndo} />
          <IconButton icon="delete" size={20} onPress={onRemoveEntirely} />
        </View>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <Button onPress={onCapture} icon="camera" loading={isLoading}>
          <BaseText variant="subTitleTwo">Submit</BaseText>
        </Button>
      </View>
    </View>
  );
};

export default memo(Canvas);

const styles = StyleSheet.create({
  container: {
    flex: 5,
    rowGap: 20,
  },
  viewShot: {
    flex: 3,
  },
  board: {
    flex: 3,
    borderWidth: 1,
    marginHorizontal: 8,
  },
  deleteButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
