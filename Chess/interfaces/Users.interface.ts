import {CapturedType, CapturedsProps, Color} from '../Contants';
export interface UserItemProps {
  captured: CapturedsProps;
  Rotation: number;
  User: any;
  turn: Color;
}
export interface User {
  place: string;
  Rotation: number;
  User: any;
  turn: Color;
  captured: CapturedType;
}
