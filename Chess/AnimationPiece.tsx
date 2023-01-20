import React from 'react';
import {Animated} from 'react-native';
import {Pieces} from './Contants';
import {stone} from './interfaces/AnimationPiece.interface';

const AnimationStone = ({
  Moving,
  show,
  valueX,
  valueY,
  Rotation,
  width,
}: stone) => {
  if (!show) {
    return null;
  }
  return (
    <Animated.Image
      source={Pieces[Moving.image]}
      style={{
        transform: [{scaleY: Rotation}],
        width: width,
        zIndex: 32333332,
        left: valueX,
        top: valueY,
        position: 'absolute',
        opacity: Moving.color === 'w' ? 0.6 : 0.9,
        height: width,
      }}
    />
  );
};
export default AnimationStone;
