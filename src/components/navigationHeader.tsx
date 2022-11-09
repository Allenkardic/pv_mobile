import React from 'react';

import {
  StyleSheet,
  GestureResponderEvent,
  View,
  SafeAreaView,
} from 'react-native';

import {Icon} from '../components';
import {colors, spacing} from '../constants';

interface IProps {
  onPressLeftIcon: (event: GestureResponderEvent) => void;
  onPressRightIcon: (event: GestureResponderEvent) => void;
  isFavourite: boolean;
}

function NavigationHeader({
  onPressLeftIcon,
  onPressRightIcon,
  isFavourite,
}: IProps) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Icon
          onPress={onPressLeftIcon}
          name="chevron-back"
          size={25}
          color={colors.white}
        />
        <Icon
          onPress={onPressRightIcon}
          name={isFavourite ? 'heart' : 'heart-outline'}
          size={25}
          color={isFavourite ? colors.red : colors.white}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xsmall,
  },
});

export default NavigationHeader;
