import React from 'react';
import {StyleSheet, View, ImageBackground, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {colors, spacing, images} from '../constants';
import {H4, H6, Image} from '../components';

interface Props {
  data: any;
}

export default function CartCard({data}: Props) {
  const theme = useTheme();
  const styles = useStyles({theme});
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
          <H6 color={colors.white}>{`${data.length} ${
            data.length <= 1 ? 'Item' : 'Items'
          }`}</H6>
        </View>
        <View>
          <ScrollView horizontal={true}>
            {data.map((item: any, index: string) => (
              <View
                key={index}
                style={{
                  height: imgContainerSize,
                  width: imgContainerSize,
                  borderRadius: imgContainerSize / 2,
                  backgroundColor: colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: data.length === index + 1 ? 0 : spacing.mini,
                }}>
                <Image
                  source={{uri: item.strCategoryThumb}}
                  style={{
                    height: imgSize,
                    width: imgSize,
                  }}
                />
              </View>
            ))}
          </ScrollView>
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
      borderColor: 'red',
      borderWidth: 1,
      borderStyle: 'solid',
    },
  });
