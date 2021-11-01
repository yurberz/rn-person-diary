import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../../../constants/theme';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingHorizontal: SIZES.padding10,
    backgroundColor: COLORS.whiteColor,
  },
  headerTitleStyle: {
    marginTop: 5,
    marginBottom: 3,
    ...FONTS.h5,
    color: COLORS.blackColor,
  },
  imagesContainerStyle: {
    padding: 5,
  },
  imageStyle: {
    width: SIZES.height > 900 ? 90 : 82,
    height: SIZES.height > 900 ? 90 : 82,
    margin: 5,
    borderRadius: SIZES.radius,
  },
  emptyContainerStyle: {
    alignItems: 'center',
    paddingTop: SIZES.padding20,
  },
  emptyTextStyle: {
    ...FONTS.h2,
    color: COLORS.blackColor,
  },
});

export default styles;
