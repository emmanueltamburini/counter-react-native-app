import React, {useState} from 'react';
import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
  Button,
} from 'react-native';

export const CounterScreen = () => {
  const viewStyle: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    top: -10,
  };

  const textStyle: StyleProp<TextStyle> = {
    fontSize: 40,
    textAlign: 'center',
  };

  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Counter: {counter}</Text>
      <Button title="CLick" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};
