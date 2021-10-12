import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {Button, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addEntry} from '../redux/reducers/diaryReducer';
import {diary} from '../redux/selectors/diarySelector';

const TestScreen = () => {
  const dispatch = useAppDispatch();
  const entries = useAppSelector(diary);

  const testOnPress = () => {
    dispatch(
      addEntry({
        title: 'Lola12',
        description: 'lola in test',
        date: '12-10-2021',
        tags: ['#test', '#firstEntry', '#oneMoreTag'],
      }),
    );
  };

  const renderItem = () => {
    return entries?.map((entry: any, index: number) => {
      return (
        <Text key={entry.id}>
          {index}: {entry.title}, {entry.description}, {entry.date}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello PersonDiary RN-App</Text>
      <Ionicons name="code-slash" size={30} color="#000000" />
      <Button title="Test" onPress={testOnPress} />
      {renderItem()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default TestScreen;
