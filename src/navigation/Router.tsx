import React from 'react';
import BottomTabNavigator from './bottom-tabs/BottomTabNavigator';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Header from '@src/components/Header';

const Router = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.colors.onSecondary }]}>
      <View style={styles.container}>
        <Header />
        <BottomTabNavigator />
      </View>
    </SafeAreaView>
  );
};

export default Router;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
