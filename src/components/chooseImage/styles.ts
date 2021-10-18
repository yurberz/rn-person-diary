import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    width: 150,
    height: 150,
  },
  image: {
    borderRadius: 15,
  },
  icon: {
    alignSelf: 'flex-end',
    opacity: 0.6,
  },
  panel: {
    padding: 20,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    backgroundColor: 'white',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  optionsContainerStyle: {
    paddingHorizontal: 60,
  },
  optionPickerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 3,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: 'rgb(0,122,255)',
  },
  textStyle: {
    marginLeft: 10,
    fontSize: 16,
    color: '#ffffff',
  },
});

export default styles;
