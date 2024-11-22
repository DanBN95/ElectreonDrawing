import { StyleSheet, View } from 'react-native';
import React from 'react';
import StatisticsOverallSection from '@src/components/StatisticsOverallSection';
import { useSelector } from 'react-redux';
import { selectSummaryResults } from '@src/features/slices/summaryResultsSlice';

const StatisticsScreen = () => {
  const summaryResults = useSelector(selectSummaryResults);
  return (
    <View style={styles.container}>
      <StatisticsOverallSection
        successRate={summaryResults?.successRate}
        overallAttempts={summaryResults?.overallAttempts}
      />
    </View>
  );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 8,
  },
});
