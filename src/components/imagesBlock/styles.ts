import {StyleSheet} from 'react-native';
import {IImagesBlockStyle} from '../../helpers/ts-helpers/interfaces';
import {COLORS, SIZES} from '../../constants/theme';

const styles = StyleSheet.create<IImagesBlockStyle>({
  columnWrapperStyle: {
    paddingHorizontal: 5,
  },
  selectedContainerStyle: (isInEditMode: boolean) => ({
    backgroundColor: isInEditMode ? COLORS.greyBackground : COLORS.whiteColor,
  }),
  flatListStyle: {
    height: SIZES.height > 900 ? 190 : 170,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.padding10,
  },
  imageStyle: {
    width: SIZES.height > 900 ? 170 : 150,
    height: SIZES.height > 900 ? 170 : 150,
    margin: SIZES.padding10,
    borderRadius: SIZES.radius,
  },
});

export default styles;
