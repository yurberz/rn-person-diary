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
  const titleMaxLimit = 12;
  const descriptionMaxLimit = 45;
  const description = props.note.description;
  const title = props.note.title;

    return (
      <View>
        <TouchableOpacity style={styles.viewContainer} onPress={props.onPress}>
          {title.length > 0 ? (<Text style={styles.containerTitle} numberOfLines={1}>
          {((title).length > titleMaxLimit) ? (((title).substring(0,titleMaxLimit-3)) + '...') : title}
          </Text>) : null}
          <Text style={styles.containerDescription} numberOfLines={1}>
            {((description).length > descriptionMaxLimit) ? (((description).substring(0,descriptionMaxLimit-3)) + '...') : description}
          </Text>
          <Ionicons name={'caret-forward'} size={20} color={'black'} style={styles.icon}/>
          </TouchableOpacity>
      </View>
    );

}

export default NoteCell;