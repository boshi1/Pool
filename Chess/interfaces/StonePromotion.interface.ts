import {Type} from '../Contants';
export interface stone {
  Rotation: number;
  IsPromotion: boolean;
  moveTopromiton: (data: Type) => void;
}
