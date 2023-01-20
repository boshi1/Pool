import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {CapturedsProps, Pieces, Piece} from '../Contants';

const StoneKilled = ({captured}: {captured: CapturedsProps}) => {
  return (
    <View style={styles.StonesContainer}>
      {Object.entries(captured).map(([key, v]) => {
        return (
          <View key={key + '5'}>
            <Image
              style={{
                width: 30,
                height: 30,
                opacity: v.amount > 0 ? 0.9 : 0.5,
              }}
              source={Pieces[`${'w'}${key}` as Piece]}
            />
            <Text
              style={{
                position: 'absolute',
                textAlign: 'center',
                fontSize: 10,
                height: 15,
                width: 15,
                bottom: -10,
                backgroundColor: v.amount > 0 ? 'white' : 'transparent',
                borderRadius: 20,
              }}>
              {v.amount > 0 ? v.amount : ''}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default StoneKilled;
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
