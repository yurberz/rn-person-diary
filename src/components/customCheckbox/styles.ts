import {StyleSheet} from 'react-native';
import {ICustomCheckboxStyle} from '../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<ICustomCheckboxStyle>({
  customCheckboxWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCheckboxStyle: (clicked: boolean) => ({
    marginRight: 6,
    color: clicked ? '#000000' : '#C7C7CD',
  }),
  checkboxContainerStyle: (clicked: boolean) => ({
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: clicked ? '#000000' : '#ffffff',
    borderWidth: clicked ? 0 : 2,
    borderColor: clicked ? null : '#C7C7CD',
  }),
});

export default styles;
