import {StyleSheet} from 'react-native';
import {IRadioButtonStyle} from '../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<IRadioButtonStyle>({
  radioButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRadioButtonStyle: (clicked: boolean) => ({
    marginRight: 6,
    color: clicked ? '#000000' : '#C7C7CD',
  }),
});

export default styles;
