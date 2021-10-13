import {StyleSheet} from 'react-native';
import {ICustomSwitcherStyle} from '../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<ICustomSwitcherStyle>({
  customSwitcherWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSwitchStyle: (clicked: boolean) => ({
    marginRight: 6,
    color: clicked ? '#000000' : '#C7C7CD',
  }),
  switchContainerStyle: (clicked: boolean) => ({
    justifyContent: 'center',
    width: 40,
    height: 20,
    borderRadius: 10,
    alignItems: clicked ? 'flex-end' : 'flex-start',
    paddingRight: clicked ? 2 : null,
    paddingLeft: clicked ? null : 2,
    backgroundColor: clicked ? '#000000' : '#C7C7CD',
  }),
  dotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
});

export default styles;
