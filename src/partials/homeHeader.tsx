import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {colors, HP, images} from '../constants';
import {H5, Image, H3} from '../components';

interface Props {
  name: string;
  image: string;
  style?: ViewStyle;
}

export default function HomeHeader({name, image, style}: Props) {
  const styles = useStyles();

  return (
    <View style={{...style}}>
      <View style={styles.contentOne}>
        <H5 color={colors.greyVariantOne}>Hi {name}</H5>
        <Image
          source={{uri: image}}
          size={HP('3.5%')}
          style={styles.userImgStyle}
        />
      </View>
      <View style={styles.contentTwo}>
        <H3 semiBold>Hungry Now?</H3>
        <Image source={images.fire} size={HP('3%')} />
      </View>
    </View>
  );
}

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentOne: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    contentTwo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userImgStyle: {
      backgroundColor: colors.greyDark,
    },
  });
