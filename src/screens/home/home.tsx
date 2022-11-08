import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  Button,
  H2,
  H3,
  H4,
  H6,
  SearchInput,
  ImageWithName,
  FoodCard,
  Image,
} from '../../components';
import {
  colors,
  currencyFormat,
  spacing,
  HP,
  images,
  placeholdersImage,
} from '../../constants';
import {HomeHeader, CartCard} from '../../partials';

import stack from '../../constants/routes';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function Home({navigation}: IProps) {
  const [searchedValue, setSearchedValue] = useState('');
  const handleSearch = (text: string) => {
    console.log(text, 'text');
    setSearchedValue(text);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HomeHeader name="Aliakwe" image={placeholdersImage} />
        <SearchInput
          value={searchedValue}
          onChangeText={(text: string) => handleSearch(text)}
          placeholder="search.."
          filterCount={2}
        />
        <View style={{marginLeft: spacing.xxsmall, flexDirection: 'row'}}>
          <ImageWithName onPress={() => {}} title="hello" isSelected={true} />
          <ImageWithName onPress={() => {}} title="hello" isSelected={false} />
          <ImageWithName onPress={() => {}} title="hello" isSelected={true} />
          <ImageWithName onPress={() => {}} title="hello" isSelected={true} />
        </View>
        <View style={styles.seeAllContainer}>
          <H4 bold>Popular items</H4>
          <H6 color={colors.greyDark}>See All</H6>
        </View>
        <View style={{marginLeft: spacing.xxsmall, flexDirection: 'row'}}>
          <FoodCard
            title="Melting Cheese Pizza"
            onPress={() => {}}
            price={9.9}
            calories={44}
            time={'20'}
          />
          <FoodCard
            title="Melting Cheese Pizza"
            onPress={() => {}}
            price={9.9}
            calories={39}
            time={'15'}
          />
        </View>

        <CartCard />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xxsmall,
    marginTop: spacing.xsmall,
    marginBottom: spacing.xxsmall,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xsmall,
    paddingVertical: spacing.xsmall,
  },

  imgStyle: {
    // height: HP('13%'),
    width: '100%',
    // alignSelf: 'flex-end',
    // resizeMode: 'contain',
    resizeMode: 'stretch',
    // resizeMode: 'center',
    // borderRadius: borderRadius.medium,
  },
});

export default Home;
