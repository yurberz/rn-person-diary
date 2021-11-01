import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

const styles = StyleSheet.create({
  playerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginTop: SIZES.padding10,
    backgroundColor: COLORS.greyBackground,
    paddingHorizontal: SIZES.padding10,
    borderRadius: SIZES.radius,
  },
  buttonStyle: {
    width: 310,
  },
});

export default styles;
