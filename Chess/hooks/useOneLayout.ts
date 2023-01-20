import React from 'react';
import {LayoutChangeEvent} from 'react-native';
import {Squares, Piece, Type, Color} from '../Contants';

interface Layouts {
  event: LayoutChangeEvent | any;
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
export default function useOneLayout(): [layout, (data: Layouts) => void] {
  const [LayOut, SetLayout] = React.useState<layout>({} as layout);

  const onLayout = React.useCallback(({event, locc, chess}: Layouts) => {
    const {x, y} = event.nativeEvent.layout;
    let array = LayOut;
    let item: any = chess.get(locc);
    let Colors = item !== null && item !== undefined ? item.color : 'b';
    let typess = item !== null && item !== undefined ? item.type : 'b';
    let Types = Colors + typess;
    array[locc] = {
      x: x,
      y: y,
      location: locc,
      image: Types,
      type: typess,
      color: Colors,
    };
    SetLayout(array);
  }, []);

  return [LayOut, onLayout];
}
