import {Color, Piece} from '../Contants';
import {Animated} from 'react-native';
export interface MovingStone {
  image: Piece;
  color: Color;
}

export interface stone {
  valueX: Animated.Value;
  Rotation: number;
  valueY: Animated.Value;
  Moving: MovingStone;
  width: number;
  show: boolean;
}
