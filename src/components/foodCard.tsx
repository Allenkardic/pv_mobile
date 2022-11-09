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
  images,
} from '../constants';
import {Image, H6, H5, CurrencyFormat, Icon} from './';

interface IProps {
  title: string;
  price: number;
  image?: string;
  calories?: number;
  time: string;
  onPress: () => void;
}

const imgSize = HP('12%');

export default function FoodCard({
  title,
  image,
  price,
  calories,
  time,
  onPress,
}: IProps) {
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <H5 center semiBold>
        {title}
      </H5>

      <CurrencyFormat amount={price} style={styles.currency} />
      <Image
        source={{
          uri: image ? image : placeholdersImage,
        }}
        style={styles.img}
      />
      <View style={styles.bottomContent}>
        <View>
          <View style={styles.caloriesContainer}>
            <Image source={images.fireGray} style={styles.imgFire} />
            <H5 semiBold style={styles.calories}>
              {calories}
            </H5>
            <H5 semiBold>Calories</H5>
          </View>
          <View style={styles.timeContainer}>
            <Icon name="time-outline" size={15} color={colors.greyDark} />
            <H6 color={colors.greyDark} style={styles.time}>
              {time}
            </H6>
            <H6 color={colors.greyDark}>min</H6>
          </View>
        </View>
        <View style={styles.bagContainer}>
          <Image source={images.bag} style={styles.bagImg} />
        </View>
      </View>
    </Pressable>
  );
}

const useStyles = (props: {theme: any}) =>
  StyleSheet.create({
    container: {
      width: WP('60%'),
      backgroundColor: colors.greyVariantThree,
      alignSelf: 'flex-start',
      borderRadius: borderRadius.medium,
      marginRight: spacing.xxsmall,
      paddingTop: spacing.xsmall,
      paddingBottom: spacing.xxsmall,
    },
    currency: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: spacing.xxsmall,
    },
    img: {
      width: imgSize,
      height: imgSize,
      backgroundColor: colors.grey,
      borderRadius: imgSize / 2,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginVertical: spacing.xsmall,
    },
    titleText: {
      marginTop: spacing.mini,
    },
    bottomContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: spacing.xxsmall,
      marginLeft: spacing.xxxsmall,
    },
    caloriesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: spacing.mini,
      backgroundColor: colors.grey,
    },
    calories: {
      marginHorizontal: spacing.mini,
    },
    imgFire: {
      tintColor: 'transparent',
      width: 20,
      height: 20,
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 4,
    },
    time: {
      marginHorizontal: spacing.mini,
    },
    bagContainer: {
      backgroundColor: colors.white,
      alignSelf: 'flex-start',
      height: 35,
      width: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius.medium,
    },
    bagImg: {
      height: 18,
      width: 18,
    },
  });
