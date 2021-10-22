import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {IImagesContainer} from '../../helpers/ts-helpers/interfaces';
import styles from './styles';

const ImagesContainer: React.FC<IImagesContainer> = ({images, isEditable}) => {
  const editable = isEditable;
  return (
    <View style={[styles.containerStyle, styles.selectedContainerStyle(editable)]}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {images.map((image: string, index: number) => (
          <Image key={index} source={{uri: image}} style={styles.imageStyle} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ImagesContainer;
