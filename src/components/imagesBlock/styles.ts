import {StyleSheet} from 'react-native';
import { IImagesBlockStyle } from '../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<IImagesBlockStyle>({
  columnWrapperStyle: {
    paddingHorizontal: 5,
  },
  selectedContainerStyle: (isInEditMode: boolean) => ({
        backgroundColor: isInEditMode ? 'rgba(236, 240, 241, 0.5)' : 'white',
      }),
  flatListStyle: {
    height: 170,
    borderRadius: 10,
    marginVertical: 10,
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 7,
  },
});

export default styles;
