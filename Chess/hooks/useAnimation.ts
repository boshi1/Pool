import React from 'react';
import {Animated, Dimensions, LayoutChangeEvent} from 'react-native';
import {Squares, Piece, Type, Color, arrayofData} from '../Contants';

const windowWidth = Dimensions.get('window').width;
interface Layouts {
  event: LayoutChangeEvent;
  locc: Squares;
  chess: any;
}
interface layoutPiece {
  x: number;
  y: number;
  location: Squares;
  image: Piece;
  type: Type;
  color: Color;
}
type layout = {
  [key in Squares]: layoutPiece;
};

interface layoutPiece {
  x: number;
  y: number;
  location: Squares;
  image: Piece;
  type: Type;
  color: Color;
}
interface props {
  SetTable: () => void;
}
const useAnimation = ({
  SetTable,
}: props): [
  Animated.Value,
  Animated.Value,
  layoutPiece,
  (NewLocation: layoutPiece, data: layoutPiece) => void,
] => {
  const valueX = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  const valueY = React.useRef<Animated.Value>(new Animated.Value(0)).current;
  const [Moving, SetMoving] = React.useState<layoutPiece>({} as layoutPiece);

  async function AnimateIt(NewLocation: layoutPiece, data: layoutPiece) {
    valueX.setValue(data.x);
    valueY.setValue(data.y);
    let x = NewLocation.x;
    let y = NewLocation.y;

    SetMoving(data);

    Animated.parallel([
      Animated.timing(valueY, {
        toValue: y,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(valueX, {
        toValue: x,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(async () => {
      SetMoving({} as layoutPiece);

      SetTable();
    });
  }
  return [valueX, valueY, Moving, AnimateIt];
};
export default useAnimation;
