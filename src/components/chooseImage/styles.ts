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
});

export default styles;