import React, {useState} from 'react';
import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import {INoteProps} from '../../../../helpers/ts-helpers/interfaces';
import {HomeStackProps} from '../../../../helpers/ts-helpers/types';
import {useAppSelector} from '../../../../hooks/reduxHooks';
import {diary} from '../../../../redux/selectors/diarySelector';
import NoteCell from '../../../../components/noteCell/NoteCell';
import styles from './styles';
import useSearch from '../../../../hooks/useSearch';
import SearchInput from '../../../../components/searchInput/SearchInput';
import CustomSwitcher from '../../../../components/customSwitcher/CustomSwitcher';

const DefaultHomeScreen = ({navigation: {navigate}}: HomeStackProps) => {
  const entries = useAppSelector(diary);

  const [searchInput, setSearchInput] = useState('');
  const [isSortedByDate, setIsSortedByDate] = useState(false);
  const filtredEntries = useSearch(entries, searchInput, isSortedByDate);

  const renderItem = ({item}: ListRenderItemInfo<INoteProps>) => {
    return (
      <NoteCell
        note={item}
        onPress={() =>
          navigate('NoteScreen', {
            entryId: item.id,
            uri: undefined,
            marker: undefined,
          })
        }
      />
    );
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
      <SearchInput
        placeholder="Search for entries"
        value={searchInput}
        onChange={value => setSearchInput(value)}
        appendComponent={
          <CustomSwitcher
            label="sort by date"
            onPress={() => setIsSortedByDate(!isSortedByDate)}
            isSelected={isSortedByDate}
            iconSize={40}
          />
        }
      />
      <FlatList
        keyExtractor={(_, index) => String(index)}
        style={styles.flatList}
        data={filtredEntries}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default DefaultHomeScreen;
