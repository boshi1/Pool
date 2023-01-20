import {Squares} from '../Contants';
export interface Attack {
  Rotation: number;
  moveToHeres: (location: Squares) => void;
  location: Squares;
  width: number;
  color: string;
}
