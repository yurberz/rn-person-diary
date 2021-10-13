import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchWrapperStyle: {
    marginVertical: 30,
    width: '100%',
  },
  prependContainerStyle: {},
  searchInputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  searchInputStyle: {
    flex: 1,
    height: 25,
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  appendContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default styles;
