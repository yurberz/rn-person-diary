import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {INoteCellProps} from '../../helpers/ts-helpers/interfaces';
import {COLORS} from '../../constants/theme';
import styles from './styles';

const NoteCell: React.FC<INoteCellProps> = props => {
  const title = props.note.title;
  const titleMaxLimit = 12;
  const description = props.note.description;
  const descriptionMaxLimit = 45;

  const udaptedTitle =
    title.length > titleMaxLimit
      ? title.substring(0, titleMaxLimit - 3) + '...'
      : title;
  const udaptedDescription =
    description.length > descriptionMaxLimit
      ? description.substring(0, descriptionMaxLimit - 3) + '...'
      : description;

  return (
    <View>
      <TouchableOpacity style={styles.viewContainer} onPress={props.onPress}>
        {title.length > 0 ? (
          <Text style={styles.containerTitle} numberOfLines={1}>
            {udaptedTitle}
          </Text>
        ) : null}

        <Text style={styles.containerDescription} numberOfLines={1}>
          {udaptedDescription}
        </Text>

        <Ionicons
          name="ios-caret-forward"
          size={20}
          color={COLORS.blackColor}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NoteCell;
