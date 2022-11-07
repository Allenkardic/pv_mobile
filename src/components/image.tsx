import React from 'react';

import {
  Image as RNImage,
  ImageStyle,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import {HP} from '../constants';

interface IProps extends ImageProps {
  source: ImageSourcePropType;
  style?: ImageStyle;
  size?: number;
}

export default function Image(props: IProps) {
  const {source, style, size = HP('5%')} = props;
  const styles = useStyles({size});
  return <RNImage source={source} style={[styles.image, {...style}]} />;
}

const useStyles = (props: {size: number}) =>
  StyleSheet.create({
    image: {
      height: props.size,
      width: props.size,
      borderRadius: props.size / 2,
      resizeMode: 'contain',
    },
  });
