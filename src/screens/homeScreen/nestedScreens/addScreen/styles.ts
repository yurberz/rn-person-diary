import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
console.log(height);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  leftSideStyle: {
    flex: 1,
  },
  dateTextStyle: {
    fontSize: 12,
    fontWeight: '500',
  },
  rightSideStyle: {
    flex: 0.5,
  },
  headerButtonsContainerStyle: {
    justifyContent: 'space-around',
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
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  columnWrapperStyle: {
    paddingHorizontal: 5,
  },
  flatListStyle: {
    marginTop: 10,
    height: 250,
  },
  iconStyle: {
    position: 'absolute',
    top: '10%',
    right: '10%',
  },
  buttonContainerStyle: {
    position: 'absolute',
    top: height > 830 ? 700 : 620,
  },
});

export default styles;
