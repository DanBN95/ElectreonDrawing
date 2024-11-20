import React from 'react';
import BottomTabNavigator from './bottom-tabs/BottomTabNavigator';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const Router = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.onSecondary }]}>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
