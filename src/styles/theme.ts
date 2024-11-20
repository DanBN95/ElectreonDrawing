import {
  MD3DarkTheme as DefaultThemeDark,
  MD3LightTheme as DefaultThemeLight,
  configureFonts,
} from 'react-native-paper';

import { darkColors, lightColors } from './colors';
import fontConfig from './typography/fontConfig';

type LightTheme = typeof DefaultThemeLight & {
  colors: typeof DefaultThemeLight.colors & typeof lightColors;
};
type DarkTheme = typeof DefaultThemeDark & {
  colors: typeof DefaultThemeDark.colors & typeof darkColors;
};

export const lightTheme: LightTheme = {
  ...DefaultThemeLight,
  fonts: configureFonts({ config: fontConfig, isV3: true }),
  colors: {
    ...lightColors,
    ...DefaultThemeLight.colors,
    onPrimary: lightColors.primary,
    onSecondary: lightColors.secondary,
    background: lightColors.white,
  },
};

export const darkTheme: DarkTheme = {
  ...DefaultThemeDark,
  fonts: configureFonts({ config: fontConfig, isV3: true }),
  colors: {
    ...darkColors,
    ...DefaultThemeDark.colors,
    onPrimary: darkColors.primary,
    onSecondary: lightColors.secondary,
    background: lightColors.white,
  },
};

export type GlobalTheme = typeof lightTheme | typeof darkTheme;
