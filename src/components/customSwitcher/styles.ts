import {StyleSheet} from 'react-native';
import {ISwitcherStyle} from '../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<ISwitcherStyle>({
  switcherStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSwitcherStyle: (clicked: boolean) => ({
    marginRight: 6,
    color: clicked ? '#000000' : '#C7C7CD',
  }),
});

export default styles;
