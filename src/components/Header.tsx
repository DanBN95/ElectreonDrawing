import { StyleSheet, View } from 'react-native';
import React from 'react';
import BaseText from './BaseText';
import useAppTheme from '@src/hooks/useAppTheme';

const Header = () => {
  const theme = useAppTheme();
  return (
    <View style={[styles.headerContainer, { borderBottomColor: theme.colors.onPrimary }]}>
      <BaseText variant="header">Drawtreon</BaseText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
  },
});
