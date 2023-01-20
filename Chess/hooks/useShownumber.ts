import React from 'react';
import {LayoutChangeEvent} from 'react-native';
import {Squares, Piece, Type, Color, arrayofData} from '../Contants';

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
interface chessMoveObject {
  to: Squares;
  promotion: Type;
}
interface props {
  MYCOLOR: Color;
}
const UseShowNumber = ({
  MYCOLOR,
}: props): [
  Squares | null,
  Squares[],
  Squares[],
  (AvMoves: Squares[]) => void,
  (big: number, small: number, MyTurn: Color, chess: any) => void,
] => {
  const [Position, SetPosition] = React.useState<Squares | null>(null);
  const [avaibableMoves, setavaibableMoves] = React.useState<Squares[]>([]);
  const [promotion, SetPromotions] = React.useState<Squares[]>([]);
  const showNumber = React.useCallback(
    (big: number, small: number, MyTurn: Color, chess: any) => {
      if (MyTurn !== MYCOLOR) {
        return;
      }

      let letter: string = arrayofData[small];
      let location: Squares = `${letter}${9 - big}` as Squares;
      console.log('location', location, `${letter}${9 - big}`);
      SetPosition(location);
      let movablearrays: Squares[] = [];

      let Promoearrays: Squares[] = [];
      let moves: chessMoveObject[] = chess.moves({
        square: location,
        verbose: true,
      });
      moves.map((data: chessMoveObject, key: number) => {
        return movablearrays.push(data.to);
      });

      moves.map((data: chessMoveObject, key) => {
        if (data.promotion != undefined) {
          return Promoearrays.push(data.to);
        }
      });
      SetPromotions(Promoearrays);
      setavaibableMoves(movablearrays);
    },
    [],
  );
  return [Position, avaibableMoves, promotion, setavaibableMoves, showNumber];
};
export default UseShowNumber;
