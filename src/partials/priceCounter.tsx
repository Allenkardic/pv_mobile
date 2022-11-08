import React, {useState} from 'react';
import {StyleSheet, View, Pressable, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {colors, borderRadius} from '../constants';
import {H5, CurrencyFormat, Icon} from '../components';

interface Props {
  price: number;
  style?: ViewStyle;
}

const iconSize = 15;
const iconBoxSize = 22;
export default function PriceCounter({price, style}: Props) {
  const theme = useTheme();
  const styles = useStyles();
  const [count, setCount] = useState(1);

  const handleIncrementPrice = () => {
    setCount(prevState => prevState + 1);
  };

  const handleDecrementPrice = () => {
    if (count > 1) {
      setCount(prevState => prevState - 1);
    }
  };
  return (
    <View style={[styles.container, {...style}]}>
      <View style={styles.totalAmountContainer}>
        <H5 semiBold>Total: </H5>
        <CurrencyFormat amount={price * count} />
      </View>
      <View style={styles.countContainer}>
        <Pressable style={styles.countBtn} onPress={handleDecrementPrice}>
          <Icon name={'remove'} color={colors.greyDark} size={iconSize} />
        </Pressable>
        <H5>{count}</H5>
        <Pressable style={styles.countBtn} onPress={handleIncrementPrice}>
          <Icon name={'add'} color={colors.greyDark} size={iconSize} />
        </Pressable>
      </View>
    </View>
  );
}

const useStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    totalAmountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    countContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '22%',
      alignItems: 'center',
    },
    countBtn: {
      borderRadius: borderRadius.small,
      width: iconBoxSize,
      height: iconBoxSize,
      borderColor: colors.greyVariantTwo,
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
