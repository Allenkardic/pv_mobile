import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, spacing, images} from '../constants';
import {H5, Image, H6, H4, Icon} from '../components';

interface Props {}

export default function ProductReview({}: Props) {
  const styles = useStyles();

  return (
    <View style={{top: -40}}>
      <H4 bold center>
        Melting Chease Pizza
      </H4>
      <View style={styles.popContainer}>
        <Image source={images.pop} style={styles.popImg} />
        <H6 color={colors.greyVariantOne}>Pizza Italiano</H6>
      </View>
      <View style={styles.reviewContent}>
        <View style={styles.timeContainer}>
          <Icon name="time-outline" size={18} color={colors.black} />
          <H5 style={styles.time}>15</H5>
          <H6>min</H6>
        </View>
        <View style={styles.dot} />
        <Icon name="star" size={18} color={colors.yellow} />
        <View style={styles.review}>
          <H6 color={colors.black} bold style={styles.reviewRating}>
            4.0
          </H6>
          <H6 color={colors.greyVariantOne}>{`(2.2k review)`}</H6>
          <Icon
            color={colors.greyVariantTwo}
            name="chevron-forward"
            size={15}
            style={{marginLeft: 3}}
          />
        </View>
      </View>
    </View>
  );
}

const useStyles = () =>
  StyleSheet.create({
    popContainer: {
      flexDirection: 'row',
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
      marginVertical: spacing.xxsmall,
    },
    popImg: {
      width: 20,
      height: 20,
      marginRight: spacing.xxxsmall,
    },
    reviewContent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    review: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    reviewRating: {
      marginLeft: spacing.xxxsmall,
      marginRight: spacing.mini,
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 4,
    },
    time: {
      marginHorizontal: spacing.mini,
    },
    dot: {
      width: 1.5,
      height: 1.5,
      backgroundColor: colors.greyDark,
      marginHorizontal: spacing.xxsmall,
    },
  });
