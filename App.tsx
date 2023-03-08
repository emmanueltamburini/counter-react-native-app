import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Assignment} from './src/screens/Assignment';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Assignment />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
