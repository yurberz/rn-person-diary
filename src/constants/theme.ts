import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  blackColor: 'rgb(44, 44, 46)',
  whiteColor: 'rgb(255, 255, 255)',
  redColor: 'rgb(255,69,58)',
  greenColor: 'rgb(48, 209, 88)',
  blueColor: 'rgb(10, 132, 255)',
  greyColor: 'rgb(174, 174, 178)',
  greyDarkColor: 'rgb(142,142,147)',
  orangeColor: 'rgb(255, 159, 10)',
  greyBackground: 'rgba(236, 240, 241, 0.5)',
  transparentPrimary: 'rgba(0, 0, 0, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.8)',
};

export const SIZES = {
  padding10: 10,
  padding20: 20,
  radius: 10,

  largeTitle: 70,
  h1: 24,
  h2: 22,
  h3: 18,
  h4: 14,
  h5: 12,

  text1: 30,
  text2: 22,
  text3: 20,
  text4: 15,
  text5: 14,
  text6: 12,

  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: SIZES.largeTitle,
  },
  h1: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: SIZES.h1,
  },
  h2: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: SIZES.h2,
  },
  h3: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: SIZES.h3,
  },
  h4: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: SIZES.h4,
  },
  h5: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: SIZES.h5,
  },

  text1: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.text1,
  },
  text2: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.text2,
  },
  text3: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.text3,
  },
  text4: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.text4,
  },
  text5: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.text5,
  },
  text6: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.text6,
  },
};
