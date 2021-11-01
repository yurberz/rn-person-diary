import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../../constants/theme';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: SIZES.padding20,
    backgroundColor: COLORS.whiteColor,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.padding10,
    paddingHorizontal: 5,
  },
  leftSideStyle: {
    flex: 1,
  },
  dateTextStyle: {
    ...FONTS.h5,
    color: COLORS.blackColor,
  },
  firstInputContainerStyle: {},
  secondInputContainerStyle: {},
  thirdInputContainerStyle: {},
  firstInputStyles: {
    ...FONTS.h3,
    borderTopRightRadius: SIZES.padding10,
    borderTopLeftRadius: SIZES.padding10,
  },
  secondInputStyles: {
    paddingVertical: SIZES.padding10,
    height: SIZES.height > 900 ? 300 : 200,
    textAlignVertical: 'top',
    ...FONTS.text4,
    color: COLORS.blackColor,
    borderBottomRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    borderBottomWidth: 0,
  },
  androidContainerStyle: {
    paddingHorizontal: SIZES.padding10,
    height: SIZES.height > 900 ? 300 : 200,
  },
  androidTextStyle: {
    ...FONTS.text4,
    color: COLORS.blackColor,
  },
  thirdInputStyles: {
    marginTop: SIZES.padding10,
    ...FONTS.h5,
    color: COLORS.blueColor,
    borderRadius: SIZES.padding10,
    borderBottomWidth: 0,
  },
  iconStyle: {
    position: 'absolute',
    top: '10%',
    right: '10%',
  },
  buttonContainerStyle: {
    position: 'absolute',
    top: SIZES.height > 900 ? SIZES.height / 2 + 300 : SIZES.height / 2 + 245,
    left: SIZES.height > 900 ? 20 : 5,
  },
});

export default styles;
