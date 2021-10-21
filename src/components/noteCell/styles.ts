import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    margin: 1,
  },
  icon: {
    flex: 1,
    textAlign: 'right',
  },
  containerImage: {
    width: 47,
    height: 47,
    borderRadius: 8,
    marginRight: 10,
  },
  containerTitle: {
    // flex: 2,
    width: 120,
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
  },
  containerDescription: {
    flex: 3,
    color: 'gray',
    fontSize: 14,
    marginHorizontal: 10,
  },
});

export default styles;