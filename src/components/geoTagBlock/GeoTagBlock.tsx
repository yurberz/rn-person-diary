import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IGeoTagBlockProps } from '../../helpers/ts-helpers/interfaces';
import IconButton from '../iconButton/IconButton';
import styles from './styles';
const GeoTagBlock: React.FC<IGeoTagBlockProps> = ({marker, isEditable, onPress}) => {
    const latitude = marker?.latitude
    const longitude = marker?.longitude
    return (
      <View style={[styles.defaultInputStyle,  styles.selectedInputStyle(isEditable)]}>
          <Ionicons name={'navigate-circle-outline'} size={30} color={'gray'} />
          <Text style={styles.textStyle}>{latitude}, {longitude}</Text>
          {isEditable && (
            <IconButton iconName={'close-outline'} iconSize={15} iconColor={'gray'} onPress={onPress} buttonStyle={styles.iconStyle}/>
          )}
          
      </View>
    );
  }

export default GeoTagBlock;
