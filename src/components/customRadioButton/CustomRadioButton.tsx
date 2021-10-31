import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ICustomButtonsProps} from '../../helpers/ts-helpers/interfaces';
import {COLORS} from '../../constants/theme';
import styles from './styles';

const CustomRadioButton: React.FC<ICustomButtonsProps> = ({
  label,
  onPress,
  isSelected,
  iconSize,
}) => {
  return (
    <View style={styles.radioButtonStyle}>
      <Text style={styles.textRadioButtonStyle(isSelected)}>{label}</Text>

      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Ionicons
          name={isSelected ? 'ios-radio-button-on' : 'ios-radio-button-off'}
          size={iconSize}
          color={isSelected ? COLORS.blackColor : COLORS.greyColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadioButton;
