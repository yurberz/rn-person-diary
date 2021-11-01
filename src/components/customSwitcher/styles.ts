import {StyleSheet} from 'react-native';
import {ISwitcherStyle} from '../../helpers/ts-helpers/interfaces';
import {COLORS, FONTS} from '../../constants/theme';

const styles = StyleSheet.create<ISwitcherStyle>({
  switcherStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  textSwitcherStyle: (clicked: boolean) => ({
    ...FONTS.text6,
    color: clicked ? COLORS.blackColor : COLORS.greyColor,
  }),
});

export default styles;
