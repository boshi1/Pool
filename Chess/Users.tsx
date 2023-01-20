import React from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import Profile from './component/Profile';
import StoneKilled from './component/StoneKilled';

const {width: windowWidth} = Dimensions.get('window');
import {CapturedsProps, Color} from './Contants';
import {UserItemProps, User} from './interfaces/Users.interface';
const UserItem = ({captured, turn, Rotation, User}: UserItemProps) =>
  React.useMemo(() => {
    {
      return (
        <View
          style={{
            transform: [{scaleY: Rotation}],
            width: '100%',
            flexDirection: 'row',
            height: 50,

            backgroundColor: 'rgba(150,150,150,0.1)',
          }}>
          <Profile key={User.id} User={User} />
          <StoneKilled captured={captured} />
        </View>
      );
    }
  }, [turn, captured]);
const RenderUser = ({place, Rotation, turn, User, captured}: User) => {
  let captureds: CapturedsProps = {} as CapturedsProps;

  if (captured.w && captured.b && User && User.Name !== undefined) {
    captureds = captured[User.color as Color];
  } else {
    return null;
  }

  const SliderAnimation = React.useRef<Animated.Value>(
    new Animated.Value(0),
  ).current;
  const AnimateSlider = React.useCallback(() => {
    SliderAnimation.setValue(0);
    Animated.timing(SliderAnimation, {
      toValue: -windowWidth,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, []);
  React.useEffect(() => {
    AnimateSlider();
  }, [turn]);
  return (
    <>
      <UserItem
        key={User.color}
        captured={captureds}
        Rotation={Rotation}
        User={User}
        turn={turn}
      />
      <View key={User.id + User.color} style={{width: '100%', height: 10}}>
        {User.color === turn ? (
          <Animated.View
            style={{
              zIndex: 10,
              height: 10,
              backgroundColor: 'rgba(255,204,203,1)',
              width: windowWidth,
              transform: [
                {
                  translateX: SliderAnimation,
                },
              ],
            }}
          />
        ) : null}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  StonesContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'row',
  },
  UserContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  ProfileContainer: {
    width: 35,
    borderRadius: 28,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'gray',
    height: 35,
  },
  Images: {width: '100%', height: '100%', resizeMode: 'contain'},
  NameContaienr: {justifyContent: 'center', alignItems: 'flex-end'},
  TextName: {color: 'white', fontSize: 10, marginTop: 15},
});

export default RenderUser;
