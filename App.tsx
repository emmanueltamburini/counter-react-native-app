import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PositionScreen} from './src/screens/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PositionScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
