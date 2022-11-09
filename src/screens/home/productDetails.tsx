import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  Button,
  H5,
  Image,
  NavigationHeader,
  ProductTypeCard,
  FocusAwareStatusBar,
} from '../../components';
import {ProductReview, PriceCounter} from '../../partials';
import {
  borderRadius,
  colors,
  HP,
  spacing,
  ellipsis,
  showSuccessMessage,
} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../redux/redux-hooks';
import {addToCart} from '../../redux/slice';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
  route?: any;
}
const imgSize = HP('20%');
function ProductDetails({navigation, route}: IProps) {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector(state => state.carts.data);

  const itemToAddOrDelete = route?.params?.item;
  const itemExists = cartList?.includes(itemToAddOrDelete);
  const [sizesList, setSizesList] = useState([
    {title: `Small 8*`, price: 9.99, isSelected: true},
    {title: `Medium 12*`, price: 12.99, isSelected: false},
    {title: `Large 18*`, price: 16.99, isSelected: false},
  ]);
  const [price, setPrice] = useState(sizesList[0].price);

  const handleSizesPress = (item: any) => {
    const itemToEdit = item;
    const updatedProduct: any = [...sizesList].map((el: any) => {
      if (el.title === itemToEdit.title) {
        el.isSelected = !el.isSelected;
      } else {
        el.isSelected = false;
      }
      return el;
    });
    setPrice(itemToEdit.price);
    setSizesList(updatedProduct);
  };

  const handleAddOrRemoveCart = () => {
    let result;
    if (!itemExists) {
      result = [...cartList, itemToAddOrDelete];
      showSuccessMessage('Item added to cart successfully');
    } else {
      result = cartList.filter((el: any) => {
        return el.idCategory !== itemToAddOrDelete.idCategory;
      });
      showSuccessMessage('Item deleted from cart successfully');
    }
    dispatch(addToCart(result));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentOne}>
          <FocusAwareStatusBar
            barStyle="light-content"
            backgroundColor={colors.primary}
          />
          <NavigationHeader
            onPressLeftIcon={() => navigation.goBack()}
            onPressRightIcon={handleAddOrRemoveCart}
            isFavourite={itemExists}
          />
        </View>
        <View style={styles.contentTwo}>
          <Image
            source={{uri: route?.params?.item?.strCategoryThumb}}
            style={styles.imgStyle}
          />
          <ProductReview name={route?.params?.item?.strCategory} />
          <View style={styles.sizeListContainer}>
            {sizesList.map((item, index) => (
              <ProductTypeCard
                key={index}
                onPress={() => handleSizesPress(item)}
                title={item.title}
                price={item.price}
                isSelected={item.isSelected}
              />
            ))}
          </View>

          <View style={styles.helperTextContainer}>
            <H5 center color={colors.greyDark} style={styles.helperText}>
              {ellipsis(route?.params?.item?.strCategoryDescription, 170)}
              <H5 color={colors.primary}>More</H5>
            </H5>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContent}>
        <PriceCounter price={price} style={styles.priceCounterContainer} />
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
    top: -HP('10%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  },
  sizeListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helperTextContainer: {
    paddingHorizontal: spacing.xxsmall,
    marginTop: spacing.xsmall,
  },
  helperText: {
    lineHeight: 25,
  },
  priceCounterContainer: {
    marginBottom: spacing.xsmall,
  },
  bottomContent: {
    paddingBottom: spacing.xsmall,
    paddingHorizontal: spacing.xxsmall,
    backgroundColor: colors.white,
  },
});

export default ProductDetails;
