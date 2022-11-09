import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {H3, Button, Image, FocusAwareStatusBar} from '../../components';
import {colors, spacing, images, HP} from '../../constants';
import stack from '../../constants/routes';
import Swiper from 'react-native-swiper';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function OnBoarding({navigation}: IProps) {
  const {home} = stack.stack;

  const slides = [
    {
      image: images.onboardingOne,
      mainText: 'Build your savings with ease &',
      helperText: 'discipline',
    },
    {
      image: images.onboardingTwo,
      mainText: 'Invest with ease in verified',
      helperText: 'opportunities',
    },
    {
      image: images.onboardingThree,
      mainText: `Lock funds you don't want to`,
      helperText: 'be tempted to touch',
    },
    {
      image: images.onboardingThree,
      mainText: `Lock funds you don't want to`,
      helperText: 'be tempted to touch',
    },
  ];

  const handlePress = () => {
    navigation.navigate(home);
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.black}
      />
      <Swiper
        showsButtons={false}
        autoplay={true}
        dotColor={colors.greyVariantOne}
        activeDotColor={colors.white}
        dotStyle={styles.dot}
        activeDotStyle={styles.dot}>
        {slides.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image source={item.image} style={styles.img} />
            <View style={styles.content}>
              <H3 center bold color={colors.white}>
                {item.mainText}
              </H3>
              <H3 center bold color={colors.white} style={styles.helperText}>
                {item.helperText}
              </H3>
            </View>
          </View>
        ))}
      </Swiper>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button
            backgroundColor={colors.blue}
            short
            alternate
            onPress={handlePress}
            text="LOGIN"
          />
        </View>
        <View style={styles.btn}>
          <Button short alternate onPress={handlePress} text="REGISTER" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  slide: {
    height: HP('75%'),
    justifyContent: 'center',
  },
  img: {
    width: HP('30%'),
    height: HP('30%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dot: {
    top: -HP('16%'),
    width: 15,
    height: 2,
    marginRight: spacing.xxsmall,
  },
  content: {
    paddingHorizontal: spacing.xxsmall,
    marginTop: spacing.xsmall,
  },
  helperText: {
    marginTop: spacing.mini,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.small,
    paddingHorizontal: spacing.xxsmall,
  },
  btn: {
    width: '48%',
  },
});

export default OnBoarding;
