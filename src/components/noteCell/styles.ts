import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 67,
    paddingLeft: 35,
    paddingRight: 20,
    alignItems: 'center',
  },
  containerImage: {
    width: 47,
    height: 47,
    borderRadius: 8,
    marginRight: 10,
  },
  containerTitle: {
    color: 'rgb(77, 81, 128)',
    fontSize: 17,
    fontWeight: '700',
  },
  containerDescription: {
    color: 'rgb(181, 182, 221)',
    fontSize: 12,
  },
});

export default styles;