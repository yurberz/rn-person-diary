import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, Button, FlatList, ListRenderItemInfo} from 'react-native';
import NoteCell from '../../components/noteCell/NoteCell';
import {useAppSelector} from '../../hooks/reduxHooks';
import {diary} from '../../redux/selectors/diarySelector';
import styles from './styles';
import NoteScreen from '../noteScreen/NoteScreen';

export interface Note {
  id: string;
  title?: string;
  description?: string;
  date?: string;
}

const HomeScreen = ({navigation: {navigate}}) => {
  const entries = useAppSelector(diary);

  const renderItem = ({item}: ListRenderItemInfo<Note>) => {
    return <NoteCell note={item} onPress={() => navigate('Note')}/>
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
      <FlatList<Note>
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

export default HomeScreen;
