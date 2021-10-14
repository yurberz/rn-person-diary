import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {ICustomSwitcherProps} from '../../helpers/ts-helpers/interfaces';
import styles from './styles';

const CustomSwitcher: React.FC<ICustomSwitcherProps> = ({
  value,
  onChange,
  text,
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={styles.customSwitcherWrapperStyle}>
        <Text style={styles.textSwitchStyle(value)}>{text}</Text>

        <View style={styles.switchContainerStyle(value)}>
          <View style={styles.dotStyle} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomSwitcher;
