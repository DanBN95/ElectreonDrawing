import React from 'react';
import Animated from 'react-native-reanimated';
import { Path, PathProps } from 'react-native-svg';

const MyPath = React.forwardRef((props: PathProps, ref: React.LegacyRef<Path>) => {
  return <Path ref={ref} {...props} />;
});

const AnimatedPath = Animated.createAnimatedComponent(MyPath);

export default AnimatedPath;
