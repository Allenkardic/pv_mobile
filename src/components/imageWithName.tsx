import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Pressable} from 'react-native';
import {colors, spacing} from '../constants';
import {H4, H5} from './';
import {Image} from './';

interface IProps {
  title: string;
  isSelected: boolean;
  image?: string;
  onPress?: () => void;
}

const sizeOneImg = 40;
const sizeTwoImg = 70;
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
          uri: image
            ? image
            : 'https://style.anu.edu.au/_anu/4/images/placeholders/person.png',
        }}
        style={styles.img}
      />
      {isSelected ? (
        <H4 semiBold color={colors.greenVariantTwo} style={styles.titleText}>
          {title}
        </H4>
      ) : (
        <H5 style={styles.titleText}>{title}</H5>
      )}
    </Pressable>
  );
}

const useStyles = (props: {theme: any; isSelected: boolean}) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      width: props.isSelected ? sizeTwoImg : sizeOneImg,
      height: props.isSelected ? sizeTwoImg : sizeOneImg,
      borderRadius: props.isSelected ? sizeTwoImg : sizeOneImg / 2,
      borderColor: props.isSelected ? colors.greenVariantTwo : colors.white,
      borderWidth: props.isSelected ? 4 : 2,
    },
    titleText: {
      marginTop: spacing.mini,
    },
  });
