import React, {useRef, useCallback, useMemo, useState} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {RNBottomSheet, Button, H2, H3, H6} from '../../components';
import {colors, currencyFormat, spacing, HP} from '../../constants';
import {TransactionCard, TransactionSheetHeader} from '../../partials';

import stack from '../../constants/routes';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function Home({navigation}: IProps) {
  return (
    <View>
      <Text>hfhejkek</Text>
      <Text>HOME</Text>
      <Text>HOME</Text>
      <Text>HOME</Text>
      <Text>HOME</Text>
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

export default Home;
