import React from 'react';
import {View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ISearchInputProps} from '../../helpers/ts-helpers/interfaces';
import {COLORS} from '../../constants/theme';
import styles from './styles';

const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder,
  autoCapitalize = 'none',
  value,
  onChange,
  prependComponent,
  appendComponent,
}) => {
  return (
    <View style={styles.searchWrapperStyle}>
      <View style={styles.prependContainerStyle}>{prependComponent}</View>

      <View style={styles.searchInputContainerStyle}>
        <Ionicons
          name="ios-search-outline"
          size={30}
          color={COLORS.blackColor}
        />

        <TextInput
          style={styles.searchInputStyle}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          value={value}
          onChangeText={onChange}
        />

        <View style={styles.appendContainerStyle}>{appendComponent}</View>
      </View>
    </View>
  );
};

export default SearchInput;
