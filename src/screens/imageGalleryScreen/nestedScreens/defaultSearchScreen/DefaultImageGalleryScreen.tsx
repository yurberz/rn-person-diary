
import React from 'react';
import {
  View,
  Text,
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
  Image,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import dateFormat from '../../../../helpers/function-helpers/dateFormat';
import {ISectionImageData} from '../../../../helpers/ts-helpers/interfaces';
import {
  ImageGalleryStackProps,
  TImageModel,
} from '../../../../helpers/ts-helpers/types';
import {useAppSelector} from '../../../../hooks/reduxHooks';
import styles from './styles';

const DefaultImageGalleryScreen = ({
  navigation: {navigate},
}: ImageGalleryStackProps) => {
  const {entries} = useAppSelector(state => state.personalDiary);
  const sectionListData = entries.map((entry, index) => ({
    title: entry.date,
    key: entry.id,
    data: [
      {
        key: String(index),
        list: entry.images,
      },
    ],
  }));

  const renderHeader = ({
    section: {title},
  }: {
    section: SectionListData<ISectionImageData>;
  }) => {
    const formattedDate = dateFormat(title);

    return <Text>{formattedDate}</Text>;
  };

  const renderSection = ({
    item,
  }: SectionListRenderItemInfo<ISectionImageData>) => {
    return (
      <FlatList
        data={item.list}
        numColumns={4}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
      />
    );
  };

  const renderListItem = ({item: {url}}: ListRenderItemInfo<TImageModel>) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => showImage(url)}>
        <Image source={{uri: url}} style={styles.imageStyle} />
      </TouchableOpacity>
    );
  };

  const showImage = (url: string) => {
    navigate('FullImageScreen', {
      image: url,
    });
  };

  return (
    <View style={styles.containerStyle}>
      <SectionList
        renderSectionHeader={renderHeader}
        sections={sectionListData}
        renderItem={renderSection}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default DefaultImageGalleryScreen;
