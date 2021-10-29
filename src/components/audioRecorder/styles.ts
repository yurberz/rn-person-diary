import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textContainerStyle: {
    position: 'absolute',
    top: -300,
    right: 0,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 70,
    color: 'rgb(10, 132, 255)',
  },
  secsTextStyle: {
    fontSize: 30,
    color: 'rgb(10, 132, 255)',
    opacity: 0.7,
  },
  iconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#ffffff',
  },
});

export default styles;
