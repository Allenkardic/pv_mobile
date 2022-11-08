import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {colors, spacing, images, placeholdersImage} from '../constants';
import {H4, H6, Image} from '../components';

interface Props {}

export default function CartCard({}: Props) {
  const theme = useTheme();
  const styles = useStyles({theme});
  const list = [{image: placeholdersImage}, {image: placeholdersImage}];
  const imgContainerSize = 35;
  const imgSize = 25;
  return (
    <ImageBackground imageStyle={styles.container} source={images.card}>
      <View style={styles.imgContainer}>
        <View>
          <H4
            semiBold
            color={colors.white}
            style={{marginBottom: spacing.mini}}>
            Cart
          </H4>
          <H6 color={colors.white}>2 Items</H6>
        </View>
        <View style={styles.imgStyle}>
          {list.map((item, index) => (
            <View
              key={index}
              style={{
                height: imgContainerSize,
                width: imgContainerSize,
                borderRadius: imgContainerSize / 2,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: list.length === index + 1 ? 0 : spacing.mini,
              }}>
              <Image
                source={{uri: item.image}}
                style={{
                  height: imgSize,
                  width: imgSize,
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const useStyles = (props: {theme: any}) =>
  StyleSheet.create({
    container: {
      resizeMode: 'stretch',
      marginHorizontal: spacing.xxsmall,
    },
    imgContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: spacing.small,
      paddingVertical: spacing.xsmall,
    },
    imgStyle: {
      flexDirection: 'row',
    },
  });
