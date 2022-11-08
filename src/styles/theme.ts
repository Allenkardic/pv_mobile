import {DefaultTheme, DarkTheme} from '@react-navigation/native';

import {colors} from '../constants';

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    text: colors.black,
    lightText: colors.greyDark,
    primary: colors.primary,
    background: colors.white,
    backgroundAlternate: colors.black,
  },
};

export const DarkThemeSJ = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    text: colors.black,
    lightText: colors.greyDark,
    primary: colors.primary,
    background: colors.white,
    backgroundAlternate: colors.black,
  },
};
