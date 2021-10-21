import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  iconStyle: {
    position: 'absolute',
    top: '10%',
    right: '10%',
  },
  firstInputContainerStyle: {},
  secondInputContainerStyle: {},
  thirdInputContainerStyle: {},
  firstInputStyles: {
    fontSize: 16,
    fontWeight: '700',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  secondInputStyles: {
    height: 200,
    paddingVertical: 10,
    textAlignVertical: 'top',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomWidth: 0,
  },
  thirdInputStyles: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '500',
    color: 'rgb(10, 122, 255)',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomWidth: 0,
  },
  buttonContainerStyle: {
    position: 'absolute',
    top: 625,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  leftSideStyle: {
    flex: 1,
  },
  dateTextStyle: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default styles;
