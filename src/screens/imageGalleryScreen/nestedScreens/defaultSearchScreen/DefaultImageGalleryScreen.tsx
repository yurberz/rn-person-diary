import React from 'react';
import {
  View,
  Text,
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  ImageGalleryStackProps,
  TEntryModel,
  TImageModel,
} from '../../../../helpers/ts-helpers/types';
import {useAppSelector} from '../../../../hooks/reduxHooks';
import styles from './styles';

const DefaultImageGalleryScreen = ({
  navigation: {navigate},
}: ImageGalleryStackProps) => {
  const {entries} = useAppSelector(state => state.personalDiary);

  console.log(JSON.stringify(entries, null, 2));

  const showImage = (url: string) => {
    navigate('FullImageScreen', {
      image: url,
    });
  };

  const renderHeader = ({
    section: {date},
  }: {
    section: SectionListData<TImageModel>;
  }) => {
    return <Text>{date}</Text>;
  };

  const renderItem = ({item}: SectionListRenderItemInfo<TImageModel>) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => showImage(item.url)}>
        <Image source={{uri: item.url}} style={styles.imageStyle} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerStyle}>
      {/* <SectionList
        sections={entries}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
      /> */}
    </View>
  );
};

export default DefaultImageGalleryScreen;
