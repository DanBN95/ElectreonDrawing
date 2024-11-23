import { StyleSheet, View } from 'react-native';
import React from 'react';
import StatisticsOverallSection from '@src/components/StatisticsOverallSection';
import { useSelector } from 'react-redux';
import { selectResultsTable, selectSummaryResults } from '@src/features/slices/summaryResultsSlice';
import Table from '@src/components/Table';
import { getStatisticsTableColumns } from '@src/utils';

const StatisticsScreen = () => {
  const summaryResults = useSelector(selectSummaryResults);
  const resultsTable = useSelector(selectResultsTable);
  const tableColumns = getStatisticsTableColumns(resultsTable);
  return (
    <View style={styles.container}>
      <StatisticsOverallSection
        successRate={summaryResults?.successRate}
        overallAttempts={summaryResults?.overallAttempts}
      />
      <Table data={resultsTable} columns={tableColumns} />
    </View>
  );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    rowGap: 36,
  },
});
