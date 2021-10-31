import {StyleSheet} from 'react-native';
import {IInputStyle} from '../../helpers/ts-helpers/interfaces';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create<IInputStyle>({
  defaultInputStyle: {
    height: 40,
    paddingHorizontal: 10,
    color: COLORS.blackColor,
  },
  selectedInputStyle: (isInEditMode: boolean) => ({
    backgroundColor: isInEditMode ? COLORS.greyBackground : COLORS.whiteColor,
  }),
});

export default styles;
