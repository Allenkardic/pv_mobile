import {DefaultTheme, DarkTheme} from '@react-navigation/native';

import {colors} from '../constants';

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    text: colors.grey,
    lightText: colors.lightBlue,
    primary: colors.primary,
    background: colors.primary,
    backgroundAlternate: colors.white,
  },
};

export const DarkThemeSJ = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    text: colors.grey,
    lightText: colors.lightBlue,
    primary: colors.primary,
    background: colors.primary,
    backgroundAlternate: colors.black,
  },
};
