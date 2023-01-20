import React from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Pieces, Piece, prs, Type, Color} from './Contants';
import {stone} from './interfaces/StonePromotion.interface';
const StonePromtion = ({moveTopromiton, IsPromotion, Rotation}: stone) => {
  if (!IsPromotion) {
    return null;
  }
  return (
    <View style={styles.PromtionContainer}>
      {prs.map((data: Type, key: number) => {
        let color: Color = Rotation == 1 ? 'w' : 'b';
        let keysa: Piece = `${color}${data}`;
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              moveTopromiton(data);
            }}
            key={key}>
            <View style={styles.StoneContainer}>
              <Image style={styles.Image} source={Pieces[keysa]} />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  PromtionContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 130,
    marginTop: '20%',
    flexDirection: 'row',
    elevation: 4,
    zIndex: 3023,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  StoneContainer: {width: 50, height: 50},
  Image: {width: '100%', height: '100%'},
});
export default StonePromtion;
