import React from 'react';
import {View} from 'react-native';
import {ChessBoard} from './ChessBoard';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const Url = 's'; //your host
import Chess from './item';
import {io} from 'socket.io-client';
import {useSetState} from './hooks/useSetState';
import {Player} from './Contants';
import {StartView, WaitView, WinnerView} from './component/extraComponent';
const socket = io('yourHost');
const uid = (): string =>
  Date.now().toString(36) + Math.random().toString(36).substr(2);

const ChessBoards = (props: any) => {
  const [
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
  ] = useSetState();
  function Reset() {
    setState({
      Players: [],
      WinnerIs: null,
      isModalVisible: true,
      MYCOLOR: null,
      TableId: null,
      board: null,
      ChessGame: null,
      OnchangeRotation: null,
      id: null,
      Name: '',
    });
  }
  function startItem() {
    socket.emit('join', {id: id, Name: Name});
    socket.on('joinPlayer', data => {
      let Me: Player = data.Players.find((player: Player) => player.id === id);

      const ChessGame: any = new (Chess as any)(
        'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      );
      try {
        setState({
          MYCOLOR: Me.color,
          ChessGame: ChessGame,
          board: new ChessGame.board(),
          OnchangeRotation: Me.color == 'b' ? -1 : 1,
          TableId: data.TableId,
          Players: data.Players,
        });
      } catch (error) {}
    });
  }

  React.useEffect((): any => {
    if (id !== '' && id !== null) {
      startItem();
    }
    return () => socket.off('joinPlayer');
  }, [id]);

  if (id === null) {
    return <StartView {...{setState, Name}} />;
  }
  if (ChessGame === null || Players.length != 2) {
    return <WaitView />;
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <ChessBoard
        MYCOLOR={MYCOLOR}
        TableId={TableId}
        playerId={id}
        chess={ChessGame}
        board={board}
        socket={socket}
        Players={Players}
        Rotation={OnchangeRotation}
        GameFinished={(winner: Player) =>
          setState({WinnerIs: winner, isModalVisible: true})
        }
        Pciked={0}
        {...props}
      />
      {WinnerIs && isModalVisible ? (
        <WinnerView
          goBack={() => {
            Reset();
          }}
          {...{WinnerIs, id}}
        />
      ) : null}
    </View>
  );
};
export default ChessBoards;
