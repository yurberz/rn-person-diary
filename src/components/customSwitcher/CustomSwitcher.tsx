import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ICustomButtonsProps} from '../../helpers/ts-helpers/interfaces';
import {COLORS} from '../../constants/theme';
import styles from './styles';

const CustomSwitcher: React.FC<ICustomButtonsProps> = ({
  label,
  onPress,
  isSelected,
  iconSize,
}) => {
  return (
    <View style={styles.switcherStyle}>
      <Text style={styles.textSwitcherStyle(isSelected)}>{label}</Text>

      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <MaterialCommunityIcons
          name={isSelected ? 'toggle-switch' : 'toggle-switch-off'}
          size={iconSize}
          color={isSelected ? COLORS.blackColor : COLORS.greyColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitcher;
