import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'gray',
    width: 150,
    height: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  firstInputContainerStyle: {
    marginTop: 30,
  },
  secondInputContainerStyle: {
    marginTop: 15,
  },
  inputStyles: {
    height: 150,
    paddingVertical: 5,
    textAlignVertical: 'top',
    borderBottomWidth: 0,
  },
});

export default styles;
