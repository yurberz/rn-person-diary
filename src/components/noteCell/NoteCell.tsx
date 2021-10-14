import React from 'react';
import {View, Image, Text} from 'react-native';
import { Note } from '../../screens/homeScreen/HomeScreen';
import styles from './styles';

interface NoteCellProps {
  note: Note;
  onPress: () => void;
}

const NoteCell: React.FC<NoteCellProps> = (props) => {

    return (
      <View style={styles.viewContainer}>
          <Text style={styles.containerTitle}>
            {props.note.title}
          </Text>
          <Text style={styles.containerDescription}>
            {props.note.description}
          </Text>
      </View>
    );

}

export default NoteCell;