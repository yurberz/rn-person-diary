import {StyleSheet} from 'react-native';
import { IImagesContainerStyle } from '../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<IImagesContainerStyle>({
  containerStyle: {
    justifyContent: 'center',
    height: 180,
    paddingVertical: 6,
    marginVertical: 10,
    borderRadius: 10,
  },
  selectedContainerStyle: (isInEditMode: boolean) => ({
    backgroundColor: isInEditMode ? 'rgba(236, 240, 241, 0.5)' : 'white',
  }),
  contentContainerStyle: {
    flexDirection: 'row',
    left: 2,
    flexWrap: 'wrap',
    paddingHorizontal: 5,
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 9,
    borderRadius: 7,
  },
});

export default styles;
