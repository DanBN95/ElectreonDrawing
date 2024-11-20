import { ThemeContext } from '@src/context/ThemeContext';
import { darkTheme, lightTheme } from '@src/styles/theme';
import React, { useContext } from 'react';
import { PaperProvider } from 'react-native-paper';

const Providers = ({ children }: React.PropsWithChildren) => {
  const { theme } = useContext(ThemeContext);
  return (
    <PaperProvider theme={theme === 'light' ? lightTheme : darkTheme}>{children}</PaperProvider>
  );
};

export default Providers;
