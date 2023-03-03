import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: Position;
}

type Position =
  | {
      bottom: number;
      right: number;
    }
  | {
      bottom: number;
      left: number;
    }
  | {
      right: number;
      top: number;
    }
  | {
      top: number;
      left: number;
    };

export const Fab = ({title, onPress, position}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={[
          style.absolutePosition,
          position ? position : style.fabLocationBottom,
        ]}>
        <View style={style.fab}>
          <Text style={style.fabText}> {title} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          style.absolutePosition,
          position ? position : style.fabLocationBottom,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View style={style.fab}>
            <Text style={style.fabText}> {title} </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const style = StyleSheet.create({
  absolutePosition: {
    position: 'absolute',
  },
  fabLocationBottom: {
    bottom: 25,
    right: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
