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
  },
  box1: {
    flex: 0.4,
    borderWidth: 2,
    borderColor: 'white',
  },
  box2: {
    flex: 0.4,
    borderWidth: 2,
    borderColor: 'white',
  },
  box3: {
    flex: 0.2,
    borderWidth: 2,
    borderColor: 'white',
  },
});
