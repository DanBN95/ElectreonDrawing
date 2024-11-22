import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Circle, Svg } from 'react-native-svg';
import BaseText from './BaseText';
import useAppTheme from '@src/hooks/useAppTheme';

type PieChartProps = {
  successRatio: number; // Ratio of success (0 to 1)
};

const PIE_RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * PIE_RADIUS;

const PieChart: React.FC<PieChartProps> = ({ successRatio }) => {
  const theme = useAppTheme();
  const percentage = Math.round(successRatio * 100);

  return (
    <View style={styles.chartContainer}>
      <Svg width={150} height={150} viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r={PIE_RADIUS}
          stroke={theme.colors.pieChartFullCircleBg}
          strokeWidth="15"
          fill="none"
          strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
          strokeLinecap="round"
        />

        <Circle
          cx="50"
          cy="50"
          r={PIE_RADIUS}
          stroke={theme.colors.pieChartFillCircleBg}
          strokeWidth="15"
          fill="none"
          strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
          strokeDashoffset={CIRCUMFERENCE - successRatio * CIRCUMFERENCE}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </Svg>

      <View style={styles.textContainer}>
        <BaseText style={[styles.percentageText, { color: theme.colors.onPrimary }]}>
          {percentage}%
        </BaseText>
      </View>
    </View>
  );
};

export default PieChart;

const styles = StyleSheet.create({
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
