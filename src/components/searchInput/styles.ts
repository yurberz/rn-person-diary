import {StyleSheet, Platform} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

const styles = StyleSheet.create({
  searchWrapperStyle: {
    paddingHorizontal: 50,
    width: '100%',
    backgroundColor: COLORS.whiteColor,
    borderBottomLeftRadius: 30,
  },
  prependContainerStyle: {},
  searchInputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 30,
  },
  searchInputStyle: {
    flex: 1,
    paddingHorizontal: 5,
    height: 25,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.blackColor,
    ...FONTS.text5,
    color: COLORS.blackColor,
    ...Platform.select({
      android: {
        padding: 5,
      },
      ios: {
        paddingHorizontal: 5,
      },
    }),
  },
  appendContainerStyle: {
    left: 20,
  },
});

export default styles;
