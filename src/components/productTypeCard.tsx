import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Pressable, View} from 'react-native';
import {
  borderRadius,
  colors,
  placeholdersImage,
  spacing,
  HP,
  WP,
} from '../constants';
import {CurrencyFormat, H6} from './';

interface IProps {
  title: string;
  price: number;
  isSelected: boolean;
  onPress: () => void;
}

const size = HP('2%');

export default function ProductTypeCard({
  title,
  price,
  isSelected,
  onPress,
}: IProps) {
  const theme = useTheme();
  const styles = useStyles({theme, isSelected});

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.circle} />
      <H6 color={colors.greyDark} semiBold style={styles.titleText}>
        {title}
      </H6>
      <CurrencyFormat amount={price} currencyColor={colors.black} />
    </Pressable>
  );
}

const useStyles = (props: {theme: any; isSelected: boolean}) =>
  StyleSheet.create({
    container: {
      height: HP('13%'),
      width: WP('22%'),
      backgroundColor: colors.white,
      alignSelf: 'flex-start',
      borderRadius: borderRadius.large,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: spacing.xxsmall,
      borderColor: props.isSelected ? colors.primary : colors.greyVariantTwo,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    circle: {
      height: size,
      width: size,
      borderRadius: size / 2,
      borderColor: props.isSelected ? colors.primary : colors.greyVariantTwo,
      borderStyle: 'solid',
      borderWidth: props.isSelected ? 6 : 1,
    },
    titleText: {
      marginTop: spacing.xxsmall,
      marginBottom: spacing.mini,
    },
  });
