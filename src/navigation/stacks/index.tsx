import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@react-navigation/native';
import stack from '../../constants/routes';
import {OnBoarding} from '../../screens/onboarding';
import {Home, ProductDetails} from '../../screens/home';

const Stack = createNativeStackNavigator();
function Routes() {
  const theme = useTheme();
  const {onboarding, home, produnctDetails} = stack.stack;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
      initialRouteName={onboarding}>
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,
          title: 'Onbaording',
        })}
        name={onboarding}
        component={OnBoarding}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,
          title: 'Home',
        })}
        name={home}
        component={Home}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,
          title: 'Send',
        })}
        name={produnctDetails}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
}

export default Routes;
