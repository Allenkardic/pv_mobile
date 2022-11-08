import React from 'react';

import {useTheme} from '@react-navigation/native';
import {
  KeyboardType,
  TextInput as RNTextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

import {borderRadius, colors, spacing} from '../constants';
import theme from '../styles';

import Icon from './icon';
import {H6} from './text';

interface IProps extends TextInputProps {
  onChangeText: any;
  value: string;
  label?: string;
  keyboardType?: KeyboardType;
  error?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  note?: string;
  suffix?: string;
  style?: ViewStyle;
  icon?: string;
  iconStyle?: ViewStyle;
  iconColor?: string;
  iconOnPress?: any;
  filterCount?: number;
}

const countStyleSize = 12;
export default function SearchInput(props: IProps) {
  const {
    onChangeText,
    label,
    value,
    keyboardType,
    placeholder,
    secureTextEntry,
    error,
    icon = 'search-sharp',
    style,
    iconStyle,
    iconOnPress,
    filterCount,
    note,
    suffix,
    ...others
  } = props;

  const appTheme = useTheme();
  const styles = useStyles({appTheme});

  return (
    <View
      style={{
        ...styles.container,
        ...style,
      }}>
      <View style={styles.searchInputcontainer}>
        <View style={styles.textContainer}>
          <TouchableOpacity style={{...iconStyle}}>
            <Icon name="search-sharp" color={colors.greyDark} size={25} />
          </TouchableOpacity>

          <RNTextInput
            autoCapitalize="none"
            style={{...styles.textInput}}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType || 'default'}
            placeholder={placeholder}
            placeholderTextColor={colors.greyVariantTwo}
            secureTextEntry={secureTextEntry}
            {...others}
          />
        </View>
      </View>
      <Pressable onPress={iconOnPress}>
        <View style={styles.iconContainer}>
          <Icon name={'filter'} size={30} color={colors.black} />
        </View>
        {filterCount && filterCount > 1 && (
          <View style={styles.filterIconCount}>
            <H6 color={colors.white}>{filterCount}</H6>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const useStyles = (props: {appTheme: any}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: colors.greyVariantTwo,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: borderRadius.medium,
      paddingRight: spacing.mini,
    },
    searchInputcontainer: {
      paddingVertical: spacing.mini,
    },
    textContainer: {
      width: '95%',
      borderRadius: borderRadius.round,
      flexDirection: 'row',
      backgroundColor: props.appTheme.dark ? colors.greyDark : colors.white,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: props.appTheme.dark ? colors.black : colors.white,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    textInput: {
      color: props.appTheme.dark ? colors.white : colors.black,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      height: '100%',
      width: '85%',
    },
    iconContainer: {
      backgroundColor: 'transparent',
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius.small,
    },
    filterIconCount: {
      position: 'absolute',
      top: 5,
      right: 1,
      zIndex: 1,
      elevation: 1,
      backgroundColor: colors.primary,
      height: countStyleSize,
      width: countStyleSize,
      borderRadius: countStyleSize / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
