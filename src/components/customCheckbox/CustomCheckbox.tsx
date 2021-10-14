import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {ICustomSwitcherProps} from '../../helpers/ts-helpers/interfaces';
import styles from './styles';

const CustomCheckbox: React.FC<ICustomSwitcherProps> = ({
  value,
  onChange,
  text,
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={styles.customCheckboxWrapperStyle}>
        <Text style={styles.textCheckboxStyle(value)}>{text}</Text>

        <View style={styles.checkboxContainerStyle(value)} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomCheckbox;
