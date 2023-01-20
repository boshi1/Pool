//

import Chess from '../item';

import React from 'react';
import {Animated, LayoutChangeEvent} from 'react-native';
import {Color, CapturedType, selectedPromotionInter} from '../Contants';
export const useVariable = (): [
  MyTurn: Color,
  captured: CapturedType,
  IsPromotion: boolean,
  selectedPromotion: selectedPromotionInter,
  setselectedpromption: (Data: selectedPromotionInter) => void,
  SetIsPromotion: (Data: boolean) => void,
  setCatured: (Data: CapturedType) => void,
  YesTurn: (Data: Color) => void,
] => {
  const [selectedPromotion, setselectedpromption] =
    React.useState<selectedPromotionInter>({} as selectedPromotionInter);
  const [IsPromotion, SetIsPromotion] = React.useState(false);
  const [MyTurn, YesTurn] = React.useState<Color>('w');
  const [captured, setCatured] = React.useState<CapturedType>({
    w: {
      b: {amount: 0},
      k: {amount: 0},
      n: {amount: 0},
      p: {amount: 0},
      q: {amount: 0},
      r: {amount: 0},
    },
    b: {
      b: {amount: 0},
      k: {amount: 0},
      n: {amount: 0},
      p: {amount: 0},
      q: {amount: 0},
      r: {amount: 0},
    },
  });

  return [
    MyTurn,
    captured,
    IsPromotion,
    selectedPromotion,
    setselectedpromption,
    SetIsPromotion,
    setCatured,
    YesTurn,
  ];
};
