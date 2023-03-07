import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    flexDirection: 'row',
  },
  box1: {
    width: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  box2: {
    width: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  box3: {
    width: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
});
