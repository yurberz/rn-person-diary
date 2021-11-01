import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  optionsContainerStyle: {},
  optionPickerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 57,
    marginVertical: 4,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.whiteColor,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.blueColor,
  },
});

export const sheetStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.transparentPrimary,
  },
  container: {
    paddingHorizontal: SIZES.padding10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});
