import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
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
  featuresBarStyles: {
    marginTop: 100,
    // backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

export default styles;
