import React from 'react';
import {LayoutChangeEvent} from 'react-native';
import {
  Squares,
  Piece,
  Type,
  Color,
  Player,
  arrayofData,
  BoardPiece,
} from '../Contants';

export const useSetState = (): [
  Players: Array<Player>,
  WinnerIs: Player | undefined,
  isModalVisible: boolean,
  MYCOLOR: Color,
  TableId: string | null,
  board: Array<Array<BoardPiece>> | null,
  ChessGame: any,
  OnchangeRotation: number,
  id: string | null,
  Name: string,
  setState: (obj: {[key: string]: any}) => void,
] => {
  const [Players, setPlayers] = React.useState<Array<Player>>(
    [] as Array<Player>,
  );
  const [WinnerIs, setWinnerIs] = React.useState<Player | undefined>(undefined);
  const [isModalVisible, setisModalVisible] = React.useState<boolean>(false);
  const [MYCOLOR, setMYCOLOR] = React.useState<Color>('w');
  const [TableId, setTableId] = React.useState<string | null>(null);
  const [board, setboard] = React.useState<Array<Array<BoardPiece>> | null>(
    null,
  );
  const [ChessGame, setChessGame] = React.useState<any>(null);
  const [Name, SetName] = React.useState<string>('');
  const [OnchangeRotation, setOnchangeRotation] = React.useState<number>(-1);
  const [id, setId] = React.useState<string | null>(null);
  function setState(obj: {[key: string]: any}) {
    Object.keys(obj).forEach(key => {
      switch (key) {
        case 'Players':
          setPlayers(obj[key]);
          break;
        case 'WinnerIs':
          setWinnerIs(obj[key]);
          break;
        case 'MYCOLOR':
          setMYCOLOR(obj[key]);
          break;
        case 'TableId':
          setTableId(obj[key]);
          break;
        case 'board':
          setboard(obj[key]);
          break;
        case 'Name':
          SetName(obj[key]);
          break;

        case 'isModalVisible':
          setisModalVisible(obj[key]);
          break;
        case 'ChessGame':
          setChessGame(obj[key]);
          break;
        case 'OnchangeRotation':
          setOnchangeRotation(obj[key]);
          break;
        case 'id':
          setId(obj[key]);
          break;

        default:
          break;
      }
    });
  }

  return [
    Players,
    WinnerIs,
    isModalVisible,
    MYCOLOR,
    TableId,
    board,
    ChessGame,
    OnchangeRotation,
    id,
    Name,
    setState,
  ];
};
