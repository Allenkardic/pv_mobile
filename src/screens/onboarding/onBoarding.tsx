import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {H2, H3, H4, H5, H6, Button} from '../../components';
import {colors, spacing} from '../../constants';
import stack from '../../constants/routes';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function OnBoarding({navigation}: IProps) {
  const {home} = stack.stack;
  return (
    <View style={styles.container}>
      <H2>2000000</H2>
      <H3>Onbaording</H3>
      <H4>H4</H4>
      <H5>Onbaording</H5>
      <H6>Onbaording</H6>
      <H3>Onbaording</H3>
      <H3>Onbaording</H3>
      <H3>Onbaording</H3>
      <H3>hwemnmnfs</H3>
      <Button
        onPress={() => navigation.navigate(home)}
        short
        alternate
        text="hshdhds"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? spacing.large : spacing.xxsmall,
  },
});

export default OnBoarding;
