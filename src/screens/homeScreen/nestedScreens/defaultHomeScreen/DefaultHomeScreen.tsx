import React from 'react';
import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import {INoteProps} from '../../../../helpers/ts-helpers/interfaces';
import {HomeStackProps} from '../../../../helpers/ts-helpers/types';
import {useAppSelector} from '../../../../hooks/reduxHooks';
import {diary} from '../../../../redux/selectors/diarySelector';
import NoteCell from '../../../../components/noteCell/NoteCell';
import styles from './styles';

const DefaultHomeScreen = ({navigation: {navigate}}: HomeStackProps) => {
  const entries = useAppSelector(diary);

  const renderItem = ({item}: ListRenderItemInfo<INoteProps>) => {
    return <NoteCell note={item} onPress={() => navigate('NoteScreen')} />;
  };

  const ItemSeparatorComponent = () => {
    return <View style={{margin: 5}} />;
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Notes yet</Text>
      </View>
    );
  };

  return (
    <View style={styles.viewContainer}>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        style={styles.flatList}
        data={entries}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default DefaultHomeScreen;
