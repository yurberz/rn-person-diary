import React from 'react';
import {Image, View} from 'react-native';
import {IImageCellProps} from '../../helpers/ts-helpers/interfaces';
import IconButton from '../iconButton/IconButton';
import styles from './styles';

const ImageCell: React.FC<IImageCellProps> = ({image, iconButtonProps}) => {
  return (
    <View>
      <Image source={{uri: image}} style={styles.imageStyle} />

      <IconButton {...iconButtonProps} />
    </View>
  );
};

export default ImageCell;
