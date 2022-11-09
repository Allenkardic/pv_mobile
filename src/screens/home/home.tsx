import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  H4,
  H6,
  SearchInput,
  ImageWithName,
  FoodCard,
  FlatList,
} from '../../components';
import {colors, spacing, placeholdersImage} from '../../constants';
import {HomeHeader, CartCard} from '../../partials';
import {useAppDispatch, useAppSelector} from '../../redux/redux-hooks';
import stack from '../../constants/routes';
import {getCategories, getMeals} from '../../redux/slice';
import {MealsType, CategoriesType} from '../../types';
interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function Home({navigation}: IProps) {
  const dispatch = useAppDispatch();
  const mealsState = useAppSelector(state => state.meals);
  const categoriesState = useAppSelector(state => state.categories);
  const cartList = useAppSelector(state => state.carts.data);
  const {productDetails} = stack.stack;
  const [searchedValue, setSearchedValue] = useState('');
  const [mealsList, setMealsList] = useState<MealsType[]>([]);
  const [categoriesList, setCategoriesList] = useState<CategoriesType[]>([]);
  const [categoriesListSearch, setCategoriesListSearch] = useState<
    CategoriesType[]
  >([]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (categoriesState.status === 'failed') {
      Alert.alert('Error occured');
    } else {
      setCategoriesList(categoriesState?.data);
      setCategoriesListSearch(categoriesState?.data);
    }
  }, [categoriesState]);

  useEffect(() => {
    dispatch(getMeals('Pasta'));
  }, []);

  useEffect(() => {
    if (mealsState.status === 'failed') {
      Alert.alert('Error occured');
    } else {
      setMealsList(mealsState?.data);
    }
  }, [mealsState]);

  const handleSearch = (text: string) => {
    if (text.length > 1) {
      const searchResult = categoriesList.filter(el =>
        el.strCategory.toLocaleLowerCase().includes(text),
      );
      setCategoriesListSearch(searchResult);
    } else {
      setCategoriesListSearch(categoriesList);
    }
    setSearchedValue(text);
  };

  const handleSelectedMeal = (item: any) => {
    const itemToEdit = item;
    const updatedProduct: any = [...mealsList].map((el: any) => {
      if (el.idMeal === itemToEdit.idMeal) {
        el.isSelected = !el.isSelected;
      } else {
        el.isSelected = false;
      }
      return el;
    });
    setMealsList(updatedProduct);
  };

  const renderItemCategories = ({item}: any) => {
    const {strCategory, strCategoryThumb} = item;
    return (
      <FoodCard
        onPress={() => navigation.navigate(productDetails, {item})}
        image={strCategoryThumb}
        title={strCategory}
        price={9.9}
        calories={39}
        time={'15'}
      />
    );
  };

  const renderItemMeals = ({item}: any) => {
    const {strMeal, strMealThumb, isSelected} = item;
    return (
      <ImageWithName
        onPress={() => handleSelectedMeal(item)}
        image={strMealThumb}
        title={strMeal}
        isSelected={isSelected}
      />
    );
  };

  console.log(cartList, 'list');

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <HomeHeader
            name="Aliakwe"
            image={placeholdersImage}
            style={styles.headerContainer}
          />
        </SafeAreaView>
        <SearchInput
          value={searchedValue}
          onChangeText={(text: string) => handleSearch(text)}
          placeholder="search.."
          filterCount={2}
          style={styles.searchInputContainer}
        />
        <View
          style={{
            marginLeft: spacing.xxsmall,
          }}>
          <FlatList
            horizontal
            data={mealsList}
            renderItem={renderItemMeals}
            emptyListText="There are no meals found"
            onEndReached={() => {}}
            refreshing={mealsState.status === 'loading'}
            keyExtractor={(_: any, index: number) => {
              return index.toString() ?? '';
            }}
          />
        </View>
        <View style={styles.seeAllContainer}>
          <H4 bold>Popular items</H4>
          <H6 color={colors.greyDark}>See All</H6>
        </View>

        <View
          style={{
            marginLeft: spacing.xxsmall,
          }}>
          <FlatList
            horizontal
            data={categoriesListSearch}
            renderItem={renderItemCategories}
            emptyListText="There are no categories found"
            onEndReached={() => {}}
            refreshing={categoriesState.status === 'loading'}
            keyExtractor={(_: any, index: number) => {
              return index.toString() ?? '';
            }}
          />
        </View>
      </View>
      <View style={{marginBottom: spacing.xsmall}}>
        <CartCard data={cartList} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: spacing.xxsmall,
    // paddingTop: spacing.xxsmall,
  },
  searchInputContainer: {
    marginTop: spacing.xsmall,
    marginBottom: spacing.xsmall,
    marginHorizontal: spacing.xxsmall,
  },
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xxsmall,
    marginTop: spacing.xsmall,
    marginBottom: spacing.xxsmall,
  },
});

export default Home;
