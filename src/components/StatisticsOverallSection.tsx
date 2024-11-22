import { StyleSheet, View } from 'react-native';
import React from 'react';
import BaseText from './BaseText';
import useAppTheme from '@src/hooks/useAppTheme';
import PieChart from './PieChart';

type StatisticsOverallSectionProps = {
  successRate: number;
  overallAttempts?: number;
};

const StatisticsOverallSection = ({
  successRate = 0,
  overallAttempts = 0,
}: StatisticsOverallSectionProps) => {
  const theme = useAppTheme();
  const successRatio = overallAttempts === 0 ? 0 : successRate / overallAttempts;
  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.sectionTitleContainer,
          { borderBottomColor: theme.colors.sectionBorderColor },
        ]}
      >
        <BaseText variant="titleTwo">Overall Summary</BaseText>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.successRatioContainer}>
          <BaseText variant="bodyTwo">Success Ratio:</BaseText>
          <BaseText>
            {successRate} / {overallAttempts}
          </BaseText>
        </View>
        <PieChart successRatio={successRatio} />
      </View>
    </View>
  );
};

export default StatisticsOverallSection;

const styles = StyleSheet.create({
  mainContainer: {
    rowGap: 16,
  },
  sectionTitleContainer: {
    borderBottomWidth: 1,
    width: '90%',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  successRatioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    rowGap: 16,
  },
});
