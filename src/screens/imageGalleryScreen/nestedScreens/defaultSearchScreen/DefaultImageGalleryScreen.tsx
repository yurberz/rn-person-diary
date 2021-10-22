// import React from 'react';
// import {
//   View,
//   Text,
//   SectionList,
//   SectionListData,
//   SectionListRenderItemInfo,
//   Image,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import dateFormat from '../../../../helpers/function-helpers/dateFormat';
// import {
//   ImageGalleryStackProps,
//   TImageModel,
// } from '../../../../helpers/ts-helpers/types';
// import {useAppSelector} from '../../../../hooks/reduxHooks';
// import styles from './styles';

// const sections = [
//   {
//     title: 'Vegetables',
//     key: 'vegetables',
//     data: [
//       {
//         key: 'vegetables',
//         list: [
//           {
//             name: 'Carrot',
//             color: 'Orange',
//           },
//           {
//             name: 'Cabbage',
//             color: 'Purple',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: 'Fruits',
//     key: 'fruits',
//     data: [
//       {
//         key: 'fruits',
//         list: [
//           {
//             name: 'Apple',
//           },
//           {
//             name: 'Banana',
//           },
//           {
//             name: 'Strawberry',
//           },
//           {
//             name: 'Blueberry',
//           },
//           {
//             name: 'Apple',
//           },
//           {
//             name: 'Banana',
//           },
//           {
//             name: 'Strawberry',
//           },
//           {
//             name: 'Blueberry',
//           },
//           {
//             name: 'Apple',
//           },
//           {
//             name: 'Banana',
//           },
//           {
//             name: 'Strawberry',
//           },
//           {
//             name: 'Blueberry',
//           },
//         ],
//       },
//     ],
//   },
// ];

// const DefaultImageGalleryScreen = ({
//   navigation: {navigate},
// }: ImageGalleryStackProps) => {
//   const renderSection = ({item}) => {
//     return (
//       <FlatList
//         data={item.list}
//         numColumns={4}
//         renderItem={renderListItem}
//         keyExtractor={keyExtractor}
//       />
//     );
//   };

//   const renderSectionHeader = ({section}) => {
//     return <Text>{section.title}</Text>;
//   };

//   const renderListItem = ({item}) => {
//     return (
//       <View
//         style={{
//           height: 50,
//           width: 100,
//           borderColor: 'green',
//           borderWidth: 1,
//         }}>
//         <Text>{item.name}</Text>
//         <Text>{item.color}</Text>
//       </View>
//     );
//   };

//   const keyExtractor = item => {
//     return item.name;
//   };

//   return (
//     <SectionList
//       sections={sections}
//       renderSectionHeader={renderSectionHeader}
//       renderItem={renderSection}
//     />
//   );
// };

// export default DefaultImageGalleryScreen;

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
