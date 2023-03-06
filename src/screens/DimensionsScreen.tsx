import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';

const {width: staticWidth, height: staticHeight} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {height, width} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 2,
          }}
        />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
      <Text style={styles.title}>
        SW: {staticWidth}, SH: {staticHeight}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
  },
});
