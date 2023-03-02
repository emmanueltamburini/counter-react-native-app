import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>Counter: {counter}</Text>

      <Fab
        title="-1"
        onPress={() => setCounter(counter - 1)}
        position={style.fabLocationBottomLeft}
      />

      <Fab
        title="+1"
        onPress={() => setCounter(counter + 1)}
        position={style.fabLocationBottomRight}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    top: -10,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  fabLocationBottomRight: {
    bottom: 25,
    right: 25,
  },
  fabLocationBottomLeft: {
    bottom: 25,
    left: 25,
  },
});
