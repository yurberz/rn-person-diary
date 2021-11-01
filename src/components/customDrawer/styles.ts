import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants/theme';
const styles = StyleSheet.create({
  drawerContainerStyle: {
    flex: 1,
  },
  drawerContentStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 45,
  },
  preferenceStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.padding10,
    paddingHorizontal: SIZES.padding20,
  },
});

export default styles;
