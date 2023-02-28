import React from 'react';
import {View, Text, ViewStyle, StyleProp, TextStyle} from 'react-native';

export const HelloWorldScreen = () => {
  const viewStyle: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  };

  const textStyle: StyleProp<TextStyle> = {
    fontSize: 45,
    textAlign: 'center',
  };

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Hello world</Text>
    </View>
  );
};
