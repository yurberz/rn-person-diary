import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants/theme';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    ...FONTS.h2,
    color: COLORS.blackColor,
  },
});

export default styles;
