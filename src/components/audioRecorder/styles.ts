import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

const styles = StyleSheet.create({
  textContainerStyle: {
    position: 'absolute',
    top: -300,
    right: 0,
    alignItems: 'center',
  },
  textStyle: {
    ...FONTS.largeTitle,
    color: COLORS.blueColor,
  },
  secsTextStyle: {
    ...FONTS.h1,
    color: COLORS.blueColor,
  },
  iconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#ffffff',
  },
});

export default styles;
