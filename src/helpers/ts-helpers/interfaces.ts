import {ForwardedRef, LegacyRef} from 'react';
import {ReturnKeyType, ImageSourcePropType, ViewStyle} from 'react-native';
import {TEntryModel, TAutoCapitalize, TFilterButton} from './types';

export interface IDiaryState {
  entries: TEntryModel[];
}

export interface ImageProps {
  imageStyle?: object;
  image?: ImageSourcePropType;
  handleCamera(): void;
  handleGellery(): void;
}

export interface INoteProps {
  id: string;
  title?: string;
  description?: string;
  date?: string;
  image?: string;
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

export interface ICustomSwitcherProps {
  value: boolean;
  onChange(value: boolean): void;
  text: string;
}

export interface ICustomSwitcherStyle {
  customSwitcherWrapperStyle: ViewStyle;
  textSwitchStyle(value: boolean): ViewStyle;
  switchContainerStyle(value: boolean): ViewStyle;
  dotStyle: ViewStyle;
}

export interface ICustomCheckboxStyle {
  customCheckboxWrapperStyle: ViewStyle;
  textCheckboxStyle(value: boolean): ViewStyle;
  checkboxContainerStyle(value: boolean): ViewStyle;
}
