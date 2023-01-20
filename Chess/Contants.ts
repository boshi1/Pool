import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export type Color = 'b' | 'w';
export type Type = 'q' | 'r' | 'n' | 'b' | 'k' | 'p';
export type PromotionType = 'r' | 'n' | 'b' | 'q';
export type Piece = `${Color}${Type}`;
export type CapturedType = {[key in Color]: {[key in Type]: {amount: number}}};
export interface Player {
  id: string;
  color: Color;
  name: string;
}
export type CapturedsProps = {
  [key in Type]: {amount: number};
};
export interface selectedPromotionInter {
  fen: string;
  color: Color;
  Position: Squares | null;
  location: Squares;
}

export interface BoardPiece {
  square: Squares;
  type: Type;
  color: Color;
}
export const CircleSize: number = windowWidth / 25;
type Stones = Record<Piece, ReturnType<typeof require>>;
export type Squares =
  | 'a8'
  | 'b8'
  | 'c8'
  | 'd8'
  | 'e8'
  | 'f8'
  | 'g8'
  | 'h8'
  | 'a7'
  | 'b7'
  | 'c7'
  | 'd7'
  | 'e7'
  | 'f7'
  | 'g7'
  | 'h7'
  | 'a6'
  | 'b6'
  | 'c6'
  | 'd6'
  | 'e6'
  | 'f6'
  | 'g6'
  | 'h6'
  | 'a5'
  | 'b5'
  | 'c5'
  | 'd5'
  | 'e5'
  | 'f5'
  | 'g5'
  | 'h5'
  | 'a4'
  | 'b4'
  | 'c4'
  | 'd4'
  | 'e4'
  | 'f4'
  | 'g4'
  | 'h4'
  | 'a3'
  | 'b3'
  | 'c3'
  | 'd3'
  | 'e3'
  | 'f3'
  | 'g3'
  | 'h3'
  | 'a2'
  | 'b2'
  | 'c2'
  | 'd2'
  | 'e2'
  | 'f2'
  | 'g2'
  | 'h2'
  | 'a1'
  | 'b1'
  | 'c1'
  | 'd1'
  | 'e1'
  | 'f1'
  | 'g1'
  | 'h1';

export const Pieces: Stones = {
  br: require('./assets/br.png'),
  bn: require('./assets/bn.png'),
  bb: require('./assets/bb.png'),
  bq: require('./assets/bq.png'),
  bk: require('./assets/bk.png'),
  bp: require('./assets/bp.png'),
  wp: require('./assets/wp.png'),
  wr: require('./assets/wr.png'),
  wn: require('./assets/wn.png'),
  wb: require('./assets/wb.png'),
  wq: require('./assets/wq.png'),
  wk: require('./assets/wk.png'),
};

export const arrayofData: Array<string> = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
];
export const prs: Array<PromotionType> = ['r', 'n', 'b', 'q'];
export const FirstColors: Array<Array<string>> = [
  ['rgba(0,0,0,0.3)', 'rgba(255,255,255,0.1)'],
  ['#9c5616', 'rgb(227,193,111)'],
  ['#00a2ff', 'rgba(255,255,255,1)'],
  ['rgb(52,157,94)', 'rgba(255,255,255,0.8)'],
  ['rgb(125,34,47)', 'rgba(255,255,255,0.9)'],
];
