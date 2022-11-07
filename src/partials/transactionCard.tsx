import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, spacing, currencyFormat} from '../constants';
import {H4, ActivityLabel, Image} from '../components';

interface Props {
  user: string;
  status: 'Received' | 'Sent' | 'Failed';
  index: number;
  image?: string;
  amount: number;
}
const size = 20;
export default function TransactionCard({
  status,
  index,
  user,
  amount,
  image,
}: Props) {
  const styles = useStyles({index});
  const activityColor =
    status === 'Received'
      ? colors.green
      : status === 'Failed'
      ? colors.warning
      : colors.yellow;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: image
              ? image
              : 'https://style.anu.edu.au/_anu/4/images/placeholders/person.png',
          }}
        />
        <View style={styles.user}>
          <H4 semiBold color={colors.blueVariantTwo} style={styles.name}>
            {user}
          </H4>
          <ActivityLabel text={status} />
        </View>
      </View>
      <H4 color={activityColor}>{currencyFormat(amount)}</H4>
    </View>
  );
}

const useStyles = (props: {index: number}) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        props.index % 2 === 0 ? colors.primary : colors.secondary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.xxsmall,
      paddingVertical: spacing.xxsmall,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    user: {
      marginLeft: spacing.xxsmall,
    },
    name: {
      marginBottom: spacing.xxxsmall,
    },
  });
