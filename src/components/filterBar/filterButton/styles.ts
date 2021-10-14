import {StyleSheet} from 'react-native';
import {IFilterButtonStyle} from '../../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<IFilterButtonStyle>({
  buttonStyle: {
    paddingHorizontal: 3,
    marginHorizontal: 3,
  },
  selectedButtonStyle: (clicked: boolean) => ({
    borderBottomWidth: clicked ? 1 : null,
    borderBottomColor: clicked ? '#000000' : null,
  }),
  textStyle: (clicked: boolean) => ({
    fontWeight: clicked ? '700' : '500',
    color: clicked ? '#000000' : '#C7C7CD',
  }),
});

export default styles;
