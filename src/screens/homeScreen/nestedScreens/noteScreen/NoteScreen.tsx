import React from 'react';
import {View, Text} from 'react-native';
import {HomeStackProps} from '../../../../helpers/ts-helpers/types';
import styles from './styles';

const NoteScreen = ({navigation}: HomeStackProps) => {
  return (
    <View style={styles.viewContainer}>
      <Text>Edit</Text>
    </View>
  );
};

export default NoteScreen;
