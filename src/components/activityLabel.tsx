import React from 'react';
import {StyleSheet, View} from 'react-native';
import {borderRadius, colors, spacing} from '../constants';
import {H6, Icon} from './';

export interface StatusProps {
  text: 'Received' | 'Sent' | 'Failed';
}
const size = 15;
export default function ActivityLabel({text}: StatusProps) {
  const styles = useStyles({text});
  const activityColor =
    text === 'Received'
      ? colors.green
      : text === 'Failed'
      ? colors.warning
      : colors.yellow;
  const activityIcon =
    text === 'Failed' ? 'alert-outline' : 'person-add-outline';
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={activityIcon} color={activityColor} size={13} />
      </View>
      <H6 bold color={colors.white}>
        {text}
      </H6>
    </View>
  );
}

const useStyles = (props: {text: string}) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        props.text === 'Received'
          ? colors.green
          : props.text === 'Failed'
          ? colors.warning
          : colors.yellow,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: spacing.xxxsmall,
      paddingVertical: spacing.mini,
      borderRadius: borderRadius.large,
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      width: size,
      height: size,
      borderRadius: size / 2,
      marginRight: spacing.mini,
    },
  });
