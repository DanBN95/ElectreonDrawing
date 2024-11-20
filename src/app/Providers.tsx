import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '@src/context/ThemeContext';
import { darkTheme, lightTheme } from '@src/styles/theme';
import React, { useContext } from 'react';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const Providers = ({ children }: React.PropsWithChildren) => {
  const { theme } = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.gestureRoot}>
        <PaperProvider theme={theme === 'light' ? lightTheme : darkTheme}>{children}</PaperProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default Providers;

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1,
  },
});
