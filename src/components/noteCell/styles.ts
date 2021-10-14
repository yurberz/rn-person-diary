import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    margin: 1,
  },
  icon: {
    flex: 1,
    marginLeft: 'auto',
  },
  containerImage: {
    width: 47,
    height: 47,
    borderRadius: 8,
    marginRight: 10,
  },
  containerTitle: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
  },
  containerDescription: {
    color: 'gray',
    fontSize: 12,
    marginHorizontal: 10,
  },
});

export default styles;