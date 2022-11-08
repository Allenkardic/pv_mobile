import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, View, ImageStyle} from 'react-native';
import {colors, currencyFormat} from '../constants';
import {H5} from './';

interface IProps {
  amount: number;
  currencyColor?: string;
  style?: ImageStyle;
}

export default function CurrencyFormat({
  currencyColor = colors.primary,
  amount,
  style,
}: IProps) {
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <View style={[styles.container, {...style}]}>
      <H5 color={currencyColor} semiBold style={styles.currency}>
        {`${'$'}`}
      </H5>
      <H5 center semiBold>
        {currencyFormat(amount)}
      </H5>
    </View>
  );
}

const useStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    currency: {
      marginRight: 1,
    },
  });
