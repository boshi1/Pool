import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Attack} from './interfaces/AttackPoints.interface';

const AttackPoints = ({moveToHeres, width, color, location}: Attack) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        moveToHeres(location);
      }}>
      <View style={styles.CircleContainer}>
        <View
          style={{
            width: width,
            backgroundColor: color,
            height: width,
            borderRadius: width / 2,
          }}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  CircleContainer: {
    position: 'absolute',
    zIndex: 3232,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Circle: {
    opacity: 0.4,
  },
});
export default AttackPoints;
