import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchWrapperStyle: {
    marginTop: 0,
    paddingHorizontal: 50,
    width: '100%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
  },
  prependContainerStyle: {},
  searchInputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    left: 30,
  },
  searchInputStyle: {
    flex: 1,
    height: 25,
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  appendContainerStyle: {
    left: 20,
    marginTop: 0,
  },
});

export default styles;
