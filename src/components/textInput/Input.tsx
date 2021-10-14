import React, {ForwardedRef, forwardRef, LegacyRef} from 'react';
import {Text, View, TextInput} from 'react-native';
import {InputProps} from '../../helpers/ts-helpers/interfaces';
import styles from './styles';

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      inputContainerStyle,
      inputStyle,
      placeholder,
      maxLength,
      multiline = false,
      blurOnSubmit = false,
      autoCapitalize = 'none',
      autoFocus = false,
      returnKeyType,
      onSubmitEditing,
      value,
      onChange,
    },
    ref,
  ) => {
    return (
      <View style={inputContainerStyle}>
        <TextInput
          style={[styles.defaultInputStyle, inputStyle]}
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
        />
      </View>
    );
  },
);

export default Input;
