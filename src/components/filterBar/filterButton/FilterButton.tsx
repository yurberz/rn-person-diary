import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IFilterButtonProps} from '../../../helpers/ts-helpers/interfaces';
import styles from './styles';

const FilterButton: React.FC<IFilterButtonProps> = ({
  callback,
  text,
  id,
  selectedIndex,
}) => {
  const clicked = selectedIndex === id;

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, styles.selectedButtonStyle(clicked)]}
      activeOpacity={0.8}
      disabled={clicked}
      onPress={() => {
        callback(id);
      }}>
      <Text style={styles.textStyle(clicked)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
