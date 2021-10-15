import {ForwardedRef, LegacyRef} from 'react';
import {ReturnKeyType, TextInput, ViewStyle} from 'react-native';
import {TEntryModel, TAutoCapitalize, TFilterButton} from './types';

export interface IDiaryState {
  entries: TEntryModel[];
}

export interface InputProps {
  inputContainerStyle?: object;
  inputStyle?: object;
  placeholder: string;
  maxLength?: number;
  multiline?: boolean;
  blurOnSubmit?: boolean;
  autoCapitalize?: TAutoCapitalize;
  autoFocus?: boolean;
  returnKeyType?: ReturnKeyType;
  onSubmitEditing?(): void;
  value: string;
  onChange(value: string): void;
}

export interface ISearchInputProps {
  placeholder: string;
  autoCapitalize?: TAutoCapitalize;
  value: string;
  onChange(value: string): void;
  prependComponent?: JSX.Element;
  appendComponent?: JSX.Element;
}

export interface IFilterBarProps {
  data: TFilterButton[];
  onValueChange(value: string): void;
}

export interface IFilterButtonProps {
  callback(value: number): void;
  text: string;
  id: number;
  selectedIndex: number;
}

export interface IFilterButtonStyle {
  buttonStyle: ViewStyle;
  selectedButtonStyle(value: boolean): ViewStyle;
  textStyle(value: boolean): ViewStyle;
}

export interface ICustomButtonsProps {
  label?: string;
  onPress(): void;
  isSelected: boolean;
  iconSize: number;
}

export interface ISwitcherStyle {
  switcherStyle: ViewStyle;
  textSwitcherStyle(value: boolean): ViewStyle;
}

export interface IRadioButtonStyle {
  radioButtonStyle: ViewStyle;
  textRadioButtonStyle(value: boolean): ViewStyle;
}
