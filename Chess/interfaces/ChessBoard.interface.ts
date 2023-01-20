import {Color, BoardPiece} from '../Contants';
export interface ChessboardProps {
  Rotation: number;
  chess: any;
  board: Array<Array<BoardPiece>>;
  MYCOLOR: Color;
  TableId: string;
  playerId: string;
  socket: any;
  GameFinished: (IsWinner: boolean) => void;
  Players: Array<{id: string; color: Color}>;
  Pciked: number;
}
