import React, {useCallback} from 'react';
import {StyleSheet, View, ViewStyle, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {borderRadius, colors, HP} from '../constants';
import {H5, H4, H6, H3} from './text';
import ActivityIndicator from './activityIndicator';

interface IProps {
  onPress: any;
  isSubmitting?: boolean;
  hasError?: boolean;
  text: string;
  style?: ViewStyle;
  short?: boolean;
  alternate?: boolean;
  borderColor?: string;
  backgroundColor?: string;
}

export default function Button(props: IProps) {
  const {
    onPress,
    isSubmitting,
    text,
    style,
    short,
    alternate,
    hasError,
    borderColor = colors.primary,
    backgroundColor,
  } = props;
  const theme = useTheme();

  const styles = useStyles({
    short,
    theme,
    alternate,
    isSubmitting,
    hasError,
    borderColor,
    backgroundColor,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {...style}]}
        onPress={onPress}
        disabled={isSubmitting || false}>
        {isSubmitting ? (
          <ActivityIndicator
            color={alternate ? theme.colors.primary : colors.white}
          />
        ) : (
          <H4 semiBold color={colors.white}>
            {' '}
            {text}{' '}
          </H4>
        )}
      </TouchableOpacity>
    </View>
  );
}

const useStyles = (props: {
  short: any;
  alternate?: boolean;
  isSubmitting?: boolean;
  hasError?: boolean;
  theme: any;
  borderColor: any;
  backgroundColor: any;
}) =>
  StyleSheet.create({
    container: {paddingTop: 0},
    button: {
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : 'transparent',
      opacity: props.isSubmitting || props.hasError ? 0.7 : 1,
      alignItems: 'center',
      width: props.short ? '100%' : '100%',
      borderRadius: borderRadius.medium,
      borderBottomLeftRadius: props.short ? 0 : borderRadius.medium,
      justifyContent: 'center',
      textAlign: 'center',
      height: 55,
      borderColor: props.backgroundColor ? 'transparent' : colors.white,
      borderWidth: 1,
      borderStyle: 'solid',
    },
  });
