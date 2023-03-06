import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DimensionsScreen} from './src/screens/DimensionsScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DimensionsScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
