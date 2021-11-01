import {StyleSheet} from 'react-native';
import {IGeoTagBlockStyle} from '../../helpers/ts-helpers/interfaces';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const styles = StyleSheet.create<IGeoTagBlockStyle>({
  defaultContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.padding10,
    paddingHorizontal: SIZES.padding10,
    height: 40,
    borderRadius: SIZES.radius,
  },
  selectedContainerStyle: (isInEditMode: boolean) => ({
    backgroundColor: isInEditMode ? COLORS.greyBackground : COLORS.whiteColor,
  }),
  leftSideContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 316,
  },
  textStyle: {
    marginLeft: SIZES.padding10,
    ...FONTS.text5,
    color: COLORS.blackColor,
  },
});

export default styles;
