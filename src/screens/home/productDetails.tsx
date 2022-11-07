import React, {useRef, useCallback, useMemo, useState} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {Button, H2, H3, H6} from '../../components';
import {spacing} from '../../constants';

import stack from '../../constants/routes';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function ProductDetails({navigation}: IProps) {
  return (
    <View>
      <H3>hello world her here</H3>
      <H3>hello world her here</H3>
      <H3>Product details</H3>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? spacing.large : spacing.xxsmall,
    paddingHorizontal: spacing.xxsmall,
  },
  balance: {
    marginTop: spacing.xxsmall,
    marginBottom: spacing.small,
  },
  btnContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    width: '48%',
  },
  transaction: {
    marginTop: spacing.xxlarge,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});

export default ProductDetails;
