import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IIconButtonProps} from '../../helpers/ts-helpers/interfaces';
import styles from './styles';

const IconButton: React.FC<IIconButtonProps> = ({
  onPress,
  iconName,
  iconSize,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      style={styles.iconButtonStyle}
      activeOpacity={0.8}
      onPress={onPress}>
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
