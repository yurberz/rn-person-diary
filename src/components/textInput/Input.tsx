import React, {forwardRef} from 'react';
import {View, TextInput} from 'react-native';
import {IInputProps} from '../../helpers/ts-helpers/interfaces';
import styles from './styles';

const Input = forwardRef<TextInput, IInputProps>(
  (
    {
      inputContainerStyle,
      inputStyle,
      placeholder,
      maxLength,
      multiline = false,
      blurOnSubmit = false,
      autoCapitalize = 'sentences',
      autoFocus = false,
      returnKeyType,
      onSubmitEditing,
      value,
      onChange,
      isEditable,
      numberOfLines,
    },
    ref,
  ) => {
    // const isInEditMode = isEditable;
    return (
      <View style={inputContainerStyle}>
        <TextInput
          style={[styles.defaultInputStyle, inputStyle, styles.selectedInputStyle(isEditable)]}
          placeholder={placeholder}
          maxLength={maxLength}
          multiline={multiline}
          blurOnSubmit={blurOnSubmit}
          autoCapitalize={autoCapitalize}
          autoFocus={autoFocus}
          returnKeyLabel={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          ref={ref}
          value={value}
          onChangeText={onChange}
          editable={isEditable}
          numberOfLines={numberOfLines}
        />
      </View>
    );
  },
);

export default Input;
