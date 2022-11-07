import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './stacks';
import {LightTheme, DarkThemeSJ} from '../styles/theme';
import {useColorScheme} from 'react-native';
export default function Entry() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? LightTheme : LightTheme}>
      <Routes />
    </NavigationContainer>
  );
}
