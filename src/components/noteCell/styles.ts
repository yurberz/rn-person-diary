import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 1,
    paddingLeft: SIZES.padding20,
    paddingRight: SIZES.padding10,
    height: 50,
    borderBottomWidth: 1,
    borderColor: COLORS.greyDarkColor,
  },
  icon: {
    flex: 1,
    textAlign: 'right',
  },
  containerImage: {
    marginRight: SIZES.padding10,
    width: 47,
    height: 47,
    borderRadius: SIZES.radius,
  },
  containerTitle: {
    // flex: 2,
    width: 120,
    ...FONTS.h3,
    color: COLORS.blackColor,
  },
  containerDescription: {
    flex: 3,
    marginHorizontal: SIZES.padding10,
    ...FONTS.text5,
    color: COLORS.greyDarkColor,
  },
});

export default styles;
