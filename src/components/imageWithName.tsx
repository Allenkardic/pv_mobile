import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Pressable} from 'react-native';
import {
  borderRadius,
  colors,
  placeholdersImage,
  spacing,
  HP,
  WP,
} from '../constants';
import {Image, H6} from './';

interface IProps {
  title: string;
  isSelected?: boolean;
  image?: string;
  onPress: () => void;
}

const imgSize = HP('3.5%');

export default function ImageWithName({
  title,
  image,
  isSelected,
  onPress,
}: IProps) {
  const theme = useTheme();
  const styles = useStyles({theme, isSelected});

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: image ? image : placeholdersImage,
        }}
        style={styles.img}
      />
      <H6
        center
        color={isSelected ? colors.white : colors.black}
        semiBold
        style={styles.titleText}>
        {title}
      </H6>
    </Pressable>
  );
}

const useStyles = (props: {theme: any; isSelected?: boolean}) =>
  StyleSheet.create({
    container: {
      height: HP('11%'),
      width: WP('20%'),
      backgroundColor: props.isSelected ? colors.primary : colors.white,
      alignSelf: 'flex-start',
      borderRadius: borderRadius.large,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: spacing.xxsmall,
      borderColor: colors.greyVariantTwo,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    img: {
      width: imgSize,
      height: imgSize,
    },
    titleText: {
      marginTop: spacing.mini,
    },
  });
