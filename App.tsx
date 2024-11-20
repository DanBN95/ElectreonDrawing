import Providers from '@src/app/Providers';
import ThemeContextProvider from '@src/context/ThemeContext';
import Router from '@src/navigation/Router';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <ThemeContextProvider>
      <Providers>
        <Router />
      </Providers>
    </ThemeContextProvider>
  );
}

export default App;
