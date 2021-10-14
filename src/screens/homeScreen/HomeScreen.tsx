import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import NoteCell from '../../components/noteCell/NoteCell';
import {useAppSelector} from '../../hooks/reduxHooks';
import {diary} from '../../redux/selectors/diarySelector';
import styles from './styles';

export interface Note {
  id: string;
  title?: string;
  description?: string;
  date?: string;
}

const HomeScreen = () => {
  const entries = useAppSelector(diary);

  const renderItem = () => {
    return entries?.map((entry: any, index: number) => {
      return (
        <Text key={entry.id}>
          {index}: {entry.title}, {entry.description}, {entry.date}
        </Text>
      );
    });
  };

  const ItemSeparatorComponent = () => {
    return <View style={{margin: 10}} />;
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
