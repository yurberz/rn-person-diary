import {StyleSheet} from 'react-native';
import {IRadioButtonStyle} from '../../helpers/ts-helpers/interfaces';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create<IRadioButtonStyle>({
  radioButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRadioButtonStyle: (clicked: boolean) => ({
    marginRight: 6,
    color: clicked ? COLORS.blackColor : COLORS.greyColor,
  }),
});

export default styles;
