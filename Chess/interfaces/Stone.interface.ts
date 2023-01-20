import {Squares, Piece, Color} from '../Contants';
import {LayoutChangeEvent} from 'react-native';
export interface MovingStone {
  image: Piece;
  color: Color;
  location: Squares;
}
export interface position {
  Rotation: number;
  index: number;
  Color1: string;
  Color2: string;
  color: Color;
  IsInCheck: boolean;
  width: number;
  ReRender: boolean;
  row: number;
  column: number;
  Piece: Piece;
  opacity: boolean;
  avaibableMoves: string[];
  location: Squares;
  onLayout: (event: LayoutChangeEvent, location: Squares) => void;
  moveToHeres: (location: Squares) => void;
  showNumber: (row: number, column: number) => void;
}
