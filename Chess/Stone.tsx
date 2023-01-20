import React from 'react';
import {Image, TouchableOpacity, LayoutChangeEvent} from 'react-native';
import {Dimensions} from 'react-native';
import AttackPoints from './AttackPoints';
const windowWidth = Dimensions.get('window').width;
import {Squares, Pieces} from './Contants';
import {position} from './interfaces/Stone.interface';
const Stone = ({
  width,
  ReRender,
  opacity,
  row,
  IsInCheck,
  Piece,
  color,
  column,
  index,
  Rotation,
  Color1,
  Color2,
  avaibableMoves,
  location,
  showNumber,
  onLayout,
  moveToHeres,
}: position) =>
  React.useMemo(() => {
    return (
      <TouchableOpacity
        key={row + column}
        onLayout={event => {
          onLayout(event, location);
        }}
        onPress={() => {
          console.log('location', location);
          showNumber(row + 1, column);
        }}
        style={{
          transform: [{scaleY: Rotation}],
          width: width,
          height: width,
          opacity: 1,
          backgroundColor: IsInCheck ? 'red' : index % 2 ? Color1 : Color2,
        }}>
        {avaibableMoves.includes(location) ? (
          <AttackPoints
            color={'red'}
            Rotation={Rotation}
            location={location}
            moveToHeres={(location: Squares) => moveToHeres(location)}
            width={15}
          />
        ) : null}
        <Image
          source={Pieces[Piece]}
          style={{
            width: '100%',
            opacity: opacity ? 0 : color == 'b' ? 0.9 : 0.6,
            height: '100%',
          }}
        />
      </TouchableOpacity>
    );
  }, [location, Piece, opacity, IsInCheck, ReRender]);
export default Stone;
