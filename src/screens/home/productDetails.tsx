import React, {useRef, useCallback, useMemo, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {
  Button,
  H2,
  H3,
  H6,
  H4,
  H5,
  Icon,
  Image,
  NavigationHeader,
  ProductTypeCard,
} from '../../components';
import {ProductReview, PriceCounter} from '../../partials';
import {
  borderRadius,
  colors,
  HP,
  placeholdersImage,
  spacing,
  images,
  ellipsis,
} from '../../constants';

import stack from '../../constants/routes';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
const imgSize = HP('20%');
const helper =
  'MMailling cheese pizza making with Extra c=virgin and eonfmb  sdzhhfzdnm jkfdzmbbmzdn jhkfdkjhzjkd hjdfhmhjdf  hdfjhdfhhsb dhjfhfh hdfhjdfhmjd  hjdmhd bjdbfhfhfdh hjdfjbhhjd hjd';
function ProductDetails({navigation}: IProps) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentOne}>
          <NavigationHeader
            onPressLeftIcon={() => navigation.goBack()}
            onPressRightIcon={() => {}}
          />
        </View>
        <View style={styles.contentTwo}>
          <Image source={{uri: placeholdersImage}} style={styles.imgStyle} />
          <ProductReview />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ProductTypeCard
              onPress={() => {}}
              title={`Small 8*`}
              price={200}
              isSelected={true}
            />
            <ProductTypeCard
              onPress={() => {}}
              title={`Medium 12*`}
              price={200}
              isSelected={false}
            />
            <ProductTypeCard
              onPress={() => {}}
              title={`Large 18*`}
              price={200}
              isSelected={false}
            />
          </View>

          <View style={styles.helperTextContainer}>
            <H5 center color={colors.greyDark} style={styles.helperText}>
              {ellipsis(helper, 170)}
              <H5 color={colors.primary}>More</H5>
            </H5>
          </View>
          <PriceCounter
            price={19.99}
            style={{
              marginHorizontal: spacing.xxsmall,
              marginTop: spacing.medium,
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomContent}>
        <Button
          text="Next"
          onPress={() => {}}
          backgroundColor={colors.primary}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentOne: {
    backgroundColor: colors.primary,
    height: HP('20%'),
  },
  contentTwo: {
    height: HP('72%'),
    backgroundColor: colors.white,
    borderTopLeftRadius: borderRadius.large,
    borderTopRightRadius: borderRadius.large,
  },
  imgStyle: {
    top: -HP('8%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  },
  helperTextContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing.xsmall,
  },

  helperText: {
    lineHeight: 25,
  },

  bottomContent: {
    paddingBottom: spacing.xsmall,
    paddingHorizontal: spacing.xxsmall,
    backgroundColor: colors.white,
  },
});

export default ProductDetails;
