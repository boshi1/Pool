import {Squares} from '../Contants';
import {LayoutChangeEvent} from 'react-native';
export interface position {
  Rotation: number;
  index: number;
  Color1: string;
  Color2: string;
  width: number;
  avaibableMoves: string[];
  location: Squares;
  onLayout: (event: LayoutChangeEvent, location: Squares) => void;
  moveToHeres: (location: Squares) => void;
}
