import React from 'react';
import {View, Animated, Text} from 'react-native';
import {Dimensions} from 'react-native';
import Stone from './Stone';
import StonePromtion from './StonePromotion';
import AnimationStone from './AnimationPiece';
const windowWidth = Dimensions.get('window').width;
import RenderUser from './Users';
import {
  arrayofData,
  BoardPiece,
  Piece,
  Squares,
  CapturedType,
  Type,
} from './Contants';
import {ChessboardProps} from './interfaces/ChessBoard.interface';
import BlankPosition from './BlankPosition';
import {useVariable} from './hooks/useVariable';
import {FirstColors} from './Contants';
import useOneLayout from './hooks/useOneLayout';
import UseShowNumber from './hooks/useShownumber';
import useAnimation from './hooks/useAnimation';

export const ChessBoard = ({
  Rotation,
  chess: Chess,
  board,
  MYCOLOR,
  TableId,
  playerId,
  socket,
  GameFinished,
  Players,
  Pciked,
}: ChessboardProps) => {
  const [chess]: any = React.useState<any>(Chess);
  const [Table, SetTable] = React.useState<Array<Array<BoardPiece>>>(board);
  const [Position, avaibableMoves, promotion, setavaibableMoves, showNumber] =
    UseShowNumber({MYCOLOR: MYCOLOR});
  const [LayOut, onLayout] = useOneLayout();
  const [valueX, valueY, Moving, AnimateIt] = useAnimation({
    SetTable: () => {
      SetTable(chess.board());
    },
  });
  const [
    MyTurn,
    captured,
    IsPromotion,
    selectedPromotion,
    setselectedpromption,
    SetIsPromotion,
    setCatured,
    YesTurn,
  ] = useVariable();
  async function CheckPromotionAndMove(location: Squares) {
    const promotions: boolean = promotion.includes(location);
    if (promotions) {
      setselectedpromption({
        fen: chess.fen(),
        color: chess.turn(),
        Position: Position,
        location: location,
      });
      SetIsPromotion(true);
    } else {
      socket.emit('MovesStrone', {
        tableId: TableId,
        from: Position,
        playerId: playerId,
        to: location,
        promotion: null,
      });
    }
  }
  async function moveTopromiton(promotions: Type) {
    socket.emit('MovesStrone', {
      tableId: TableId,
      from: selectedPromotion.Position,
      playerId: playerId,
      to: selectedPromotion.location,
      promotion: promotions,
    });
    SetIsPromotion(false);
  }

  function moveToHere(
    fen: string,
    from: Squares,
    location: Squares,
    ObjectCaptured: CapturedType,
  ) {
    let data = LayOut[from];
    let letNew = LayOut[location];
    AnimateIt(letNew, data);
    chess.load(fen);
    setCatured(ObjectCaptured);
    YesTurn(chess.turn());
    setavaibableMoves([]);
    onLayout({
      event: {
        nativeEvent: {
          layout: {y: LayOut[location].y, x: LayOut[location].x, width: 25},
        },
      },
      locc: location,
      chess: chess,
    });
  }
  React.useEffect(() => {
    const listener = (data: any) => {
      if (data.from && data.to) {
        moveToHere(data.fen, data.from, data.to, data.Captured);
        if (data.gameOver) {
          setTimeout(() => {
            console.log('Winner', data.winner);
            GameFinished(data.winner);
          }, 2000);
        }
      }
    };
    const GameOverLister = (data: any) => {
      if (data.gameOver) {
        setTimeout(() => {
          console.log('Winner', data.winner);
          GameFinished(data.winner);
        }, 1000);
      }
      if (data.from && data.to) {
        moveToHere(data.fen, data.from, data.to, data.Captured);
      }
    };
    socket.on('move', listener);
    socket.on('GameOver', GameOverLister);

    return () => {
      socket.off('move');
      socket.off('GameOver');
    };
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#0F233C',
        zIndex: 0,
        marginTop: 50,
      }}>
      <StonePromtion
        IsPromotion={IsPromotion}
        moveTopromiton={(data: Type) => moveTopromiton(data)}
        Rotation={Rotation}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 0,
          transform: [{scaleY: Rotation}],
          flexWrap: 'wrap',
        }}>
        <RenderUser
          User={Players[1]}
          captured={captured}
          turn={MyTurn}
          Rotation={Rotation}
          place={'up'}
        />
        <AnimationStone
          show={Moving.location !== undefined}
          width={windowWidth / 8}
          valueY={valueY}
          Rotation={Rotation}
          valueX={valueX}
          Moving={Moving}
        />

        {Table.map((data: Array<BoardPiece>, row: number) => {
          return data.map((data: BoardPiece, column: number) => {
            let letter: string = arrayofData[column];
            let location = `${letter}${9 - (row + 1)}` as Squares;
            let ReRender = avaibableMoves.includes(location);

            if (data != null) {
              let Piece = (data.color + data.type) as Piece;

              return (
                <Stone
                  onLayout={(event, location) => {
                    onLayout({event: event, locc: location, chess: chess});
                  }}
                  key={location}
                  row={row}
                  Piece={Piece}
                  color={data.color}
                  avaibableMoves={avaibableMoves}
                  column={column}
                  showNumber={(row, column) => {
                    showNumber(row, column, chess.turn(), chess);
                  }}
                  Rotation={Rotation}
                  location={location}
                  opacity={Moving?.location === location ? true : false}
                  ReRender={ReRender}
                  IsInCheck={chess.in_check() && Piece == `${chess.turn()}k`}
                  moveToHeres={(location: Squares) =>
                    CheckPromotionAndMove(location)
                  }
                  width={windowWidth / 8}
                  index={row + column}
                  Color2={FirstColors[Pciked][1]}
                  Color1={FirstColors[Pciked][0]}
                />
              );
            } else {
              return (
                <BlankPosition
                  onLayout={(event, location) => {
                    onLayout({event: event, locc: location, chess: chess});
                  }}
                  key={location}
                  Rotation={Rotation}
                  location={location}
                  moveToHeres={(location: Squares) =>
                    CheckPromotionAndMove(location)
                  }
                  avaibableMoves={avaibableMoves}
                  width={windowWidth / 8}
                  index={row + column}
                  Color2={FirstColors[Pciked][1]}
                  Color1={FirstColors[Pciked][0]}
                />
              );
            }
          });
        })}
        <RenderUser
          User={Players[0]}
          turn={MyTurn}
          captured={captured}
          Rotation={Rotation}
          place={'down'}
        />
      </View>
    </View>
  );
};
