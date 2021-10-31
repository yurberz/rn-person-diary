import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingHorizontal: SIZES.padding10,
    backgroundColor: COLORS.transparentPrimary,
  },
  imageContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    flex: 0.5,
    borderRadius: SIZES.radius,
  },
});

export default styles;
