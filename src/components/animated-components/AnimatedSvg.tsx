import React from 'react';
import Animated from 'react-native-reanimated';
import { Svg, SvgProps } from 'react-native-svg';

const MySvg = React.forwardRef((props: SvgProps, ref: React.LegacyRef<Svg>) => {
  return <Svg ref={ref} {...props} />;
});

const AnimatedSvg = Animated.createAnimatedComponent(MySvg);

export default AnimatedSvg;
