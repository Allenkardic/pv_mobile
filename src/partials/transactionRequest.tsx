import React, {useState, useRef, useCallback, useMemo} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {
  colors,
  spacing,
  currencyFormat,
  WP,
  HP,
  borderRadius,
} from '../constants';
import {
  RNBottomSheet,
  H4,
  H5,
  ActivityLabel,
  Image,
  Icon,
  H3,
  ImageWithName,
  Button,
} from '../components';
import {
  BottomSheetFlatList,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

interface Props {
  data: any;
}

const firstWidth = WP('100%');
const secondWidth = WP('70%');
const thirdWidth = WP('40%');
const imgSize = 70;
export default function TransactionRequest({data}: Props) {
  const [dataList, setDataList] = React.useState(data);
  const [selectedUser, setSelectedUser] = useState({});
  const styles = useStyles({dataList});
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  //   const snapPoints = useMemo(() => ['25%', '60%'], []);
  const snapPoints = useMemo(() => ['25%', '45%'], []);

  const handlePress = (item: any) => {
    setSelectedUser(item);
    const itemToEdit = item;
    // update the list array to the item that was liked
    const updatedData: any = [...dataList].map((el: any) => {
      if (el.id === itemToEdit.id) {
        el.isSelected = !el.isSelected;
      } else {
        el.isSelected = false;
      }
      return el;
    });

    setDataList(updatedData);
    bottomSheetRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={styles.contentOne}>
          <View style={styles.contentTwo}>
            <View style={styles.contentThree}></View>
          </View>
          {dataList.map((item: any, index: number) => {
            const {id} = item;
            return (
              <View
                key={index}
                style={[
                  id === 1
                    ? styles.viewsOne
                    : id === 2
                    ? styles.viewsTwo
                    : id === 3
                    ? styles.viewsThree
                    : id === 4
                    ? styles.viewsFour
                    : id === 5
                    ? styles.viewsFive
                    : styles.viewsSix,
                ]}>
                <ImageWithName
                  title={item.name}
                  isSelected={item.isSelected}
                  onPress={() => handlePress(item)}
                />
              </View>
            );
          })}
        </View>
        <RNBottomSheet
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}
          bottomSheetRef={bottomSheetRef}>
          {/* <View> */}
          <Image
            source={{
              uri: 'https://style.anu.edu.au/_anu/4/images/placeholders/person.png',
            }}
            style={styles.imgStyle}
          />
          <H3
            center
            bold
            style={{marginTop: spacing.xxsmall, marginBottom: spacing.xsmall}}>
            {selectedUser?.name}
          </H3>
          <H5 center>{selectedUser?.phone}</H5>
          <Button
            short
            text="Continue"
            onPress={() => {}}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: spacing.small,
            }}
          />

          {/* </View> */}
        </RNBottomSheet>
      </View>
    </BottomSheetModalProvider>
  );
}

const useStyles = (props: {dataList: any}) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentOne: {
      borderColor: colors.blueVariantOne,
      borderStyle: 'solid',
      borderWidth: 1,
      height: firstWidth,
      width: firstWidth,
      borderRadius: firstWidth / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentTwo: {
      borderColor: colors.blueVariantOne,
      borderStyle: 'solid',
      borderWidth: 1,
      height: secondWidth,
      width: secondWidth,
      borderRadius: secondWidth / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentThree: {
      borderColor: colors.blueVariantOne,
      borderStyle: 'solid',
      borderWidth: 1,
      height: thirdWidth,
      width: thirdWidth,
      borderRadius: thirdWidth / 2,
    },
    viewsOne: {
      top: props.dataList[0].isSelected ? '2%' : '9%',
      position: 'absolute',
      //   borderColor: props.isSelected ? colors.greenVariantOne : colors.white,
      //   borderStyle: 'solid',
      //   borderWidth: 1,
      //   height: props.isSelected ? sizeTwo : sizeOne,
      //   width: props.isSelected ? sizeTwo : sizeOne,
      //   borderRadius: props.isSelected ? sizeTwo : sizeOne / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewsTwo: {
      top: '27%',
      left: props.dataList[1].isSelected ? '3.5%' : '8%',
      position: 'absolute',
      //   borderColor: props.isSelected ? colors.greenVariantOne : colors.white,
      //   borderStyle: 'solid',
      //   borderWidth: 1,
      //   height: props.isSelected ? sizeTwo : sizeOne,
      //   width: props.isSelected ? sizeTwo : sizeOne,
      //   borderRadius: props.isSelected ? sizeTwo : sizeOne / 2,
    },
    viewsThree: {
      bottom: props.dataList[2].isSelected ? '27%' : '30%',
      right: props.dataList[2].isSelected ? '3.5%' : '5%',
      position: 'absolute',
      //   borderColor: props.isSelected ? colors.greenVariantOne : colors.white,
      //   borderStyle: 'solid',
      //   borderWidth: 1,
      //   height: props.isSelected ? sizeTwo : sizeOne,
      //   width: props.isSelected ? sizeTwo : sizeOne,
      //   borderRadius: props.isSelected ? sizeTwo : sizeOne / 2,
    },
    viewsFour: {
      right: props.dataList[3].isSelected ? '22%' : '20%',
      top: props.dataList[3].isSelected ? '30%' : '35%',
      position: 'absolute',
      //   borderColor: props.isSelected ? colors.greenVariantOne : colors.white,
      //   borderStyle: 'solid',
      //   borderWidth: 1,
      //   height: props.isSelected ? sizeTwo : sizeOne,
      //   width: props.isSelected ? sizeTwo : sizeOne,
      //   borderRadius: props.isSelected ? sizeTwo : sizeOne / 2,
    },
    viewsFive: {
      bottom: props.dataList[4].isSelected ? '27%' : '30%',
      left: props.dataList[4].isSelected ? '18%' : '22%',
      position: 'absolute',

      //   borderColor: 'red',
      //   borderStyle: 'solid',
      //   borderWidth: 1,
      //   height: props.isSelected ? sizeTwo : sizeOne,
      //   width: props.isSelected ? sizeTwo : sizeOne,
      //   borderRadius: props.isSelected ? sizeTwo : sizeOne / 2,
    },
    viewsSix: {
      bottom: props.dataList[5].isSelected ? '2%' : '5%',
      position: 'absolute',
      //   borderColor: props.isSelected ? colors.greenVariantOne : colors.white,
      //   borderStyle: 'solid',
      //   borderWidth: 1,
      //   height: props.isSelected ? sizeTwo : sizeOne,
      //   width: props.isSelected ? sizeTwo : sizeOne,
      //   borderRadius: props.isSelected ? sizeTwo : sizeOne / 2,
    },
    imgStyle: {
      width: imgSize,
      height: imgSize,
      borderRadius: imgSize / 2,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    // imgStyle: {
    //   width: props.isSelected ? sizeTwoImg : sizeOneImg,
    //   height: props.isSelected ? sizeTwoImg : sizeOneImg,
    //   borderRadius: props.isSelected ? sizeTwoImg : sizeOneImg / 2,
    //   borderColor: props.isSelected ? colors.greenVariantTwo : colors.white,
    //   borderWidth: props.isSelected ? 4 : 2,
    // },
    titleText: {
      marginTop: spacing.mini,
    },
  });
