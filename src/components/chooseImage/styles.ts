import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  optionsContainerStyle: {},
  optionPickerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 57,
    marginVertical: 4,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgb(0,122,255)',
  },
});

export const sheetStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  container: {
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});
