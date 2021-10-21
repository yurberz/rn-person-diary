import {StyleSheet} from 'react-native';
import { IInputStyle } from '../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<IInputStyle>({
  defaultInputStyle: {
    height: 40,
    paddingHorizontal: 10,
    color: 'rgb(44,44,46) ',
  },
  selectedInputStyle: (isInEditMode: boolean) => ({
    backgroundColor: isInEditMode ? 'rgba(236, 240, 241, 0.5)' : 'white',
  }),
});

export default styles;
