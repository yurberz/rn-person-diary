import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IImagesBlockProps} from '../../helpers/ts-helpers/interfaces';
import {TImageModel} from '../../helpers/ts-helpers/types';
import styles from './styles';

const ImagesBlock: React.FC<IImagesBlockProps> = ({
  images,
  onPress,
  iconName,
  iconSize,
  iconColor,
  iconStyle,
  editable,
}) => {
  const isInEditMode = editable;
  const renderItem = ({item: {id, url}}: ListRenderItemInfo<TImageModel>) => {
    return (
      <View>
        <View>
          <Image source={{uri: url}} style={styles.imageStyle} />

          <TouchableOpacity
            style={[iconStyle]}
            activeOpacity={0.8}
            onPress={() => onPress(id, url)}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
      style={[
        styles.flatListStyle,
        styles.selectedContainerStyle(isInEditMode),
      ]}
    />
  );
};

export default ImagesBlock;
