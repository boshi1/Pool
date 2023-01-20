import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';
import {position} from './interfaces/BlankPosition.interface';
import AttackPoints from './AttackPoints';
import {Squares} from './Contants';
const windowWidth = Dimensions.get('window').width;

const BlankPosition = ({
  width,
  index,
  Rotation,
  Color1,
  Color2,
  avaibableMoves,
  location,
  onLayout,
  moveToHeres,
}: position) =>
  React.useMemo(() => {
    return (
      <View
        onLayout={event => onLayout(event, location)}
        style={
          styles({
            Rotation: Rotation,
            index,
            width: width,
            Color2: Color2,
            Color1: Color1,
          }).Container
        }>
        {avaibableMoves.includes(location) ? (
          <AttackPoints
            color={'green'}
            location={location}
            Rotation={Rotation}
            moveToHeres={(location: Squares) => moveToHeres(location)}
            width={15}
          />
        ) : null}
      </View>
    );
  }, [location, avaibableMoves]);
const styles = (props?: any) =>
  StyleSheet.create({
    Container: {
      transform: [{scaleY: props.Rotation}],
      width: props.width,
      height: props.width,
      backgroundColor: props.index % 2 ? props.Color1 : props.Color2,
    },
  });
export default BlankPosition;
