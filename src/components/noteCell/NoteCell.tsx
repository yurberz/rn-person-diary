import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Note } from '../../screens/homeScreen/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface NoteCellProps {
  note: Note;
  onPress: () => void;
}

const NoteCell: React.FC<NoteCellProps> = (props) => {

    return (
      <View>
        <TouchableOpacity style={styles.viewContainer} onPress={props.onPress}>
          <Text style={styles.containerTitle}>
            {props.note.title}
          </Text>
          <Text style={styles.containerDescription}>
            {props.note.description}
          </Text>
          <Ionicons name={'caret-forward'} size={20} color={'gray'} style={styles.icon}/>
          </TouchableOpacity>
      </View>
    );

}

export default NoteCell;