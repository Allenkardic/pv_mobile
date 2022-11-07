import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, spacing, currencyFormat} from '../constants';
import {H4, H5, ActivityLabel, Image, Icon} from '../components';

interface Props {
  title: string;
}

export default function TransactionSheetHeader({title}: Props) {
  const styles = useStyles({});

  return (
    <View style={styles.container}>
      <H4 semiBold color={colors.white}>
        {title}
      </H4>
      <View style={styles.content}>
        <H5 color={colors.blueVariantThree} style={styles.sortByStyle}>
          Sort by:
        </H5>
        <H5 color={colors.grey}>Recent</H5>
        <Icon name="chevron-down-outline" size={15} color={colors.grey} />
      </View>
    </View>
  );
}

const useStyles = (props: {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.small,
      marginHorizontal: spacing.xxsmall,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    sortByStyle: {
      marginRight: spacing.xxxsmall,
    },
  });
