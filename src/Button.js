// @flow
import React from 'react';
import {View, Text} from 'react-native';
import Touchable from './Touchable';

type Props = {
  label: string,
  onPress: Function,
  style?: Object,
};

export default function Button(props: Props) {
  let {onPress, style, label} = props;
  let textStyle;
  return (
    <Touchable onPress={onPress}>
      <View style={style}>
        <Text style={textStyle}>{label}</Text>
      </View>
    </Touchable>
  );
}
