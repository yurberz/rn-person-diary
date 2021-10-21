import {Dispatch, SetStateAction} from 'react';
import {ReturnKeyType, ViewStyle} from 'react-native';
import {
  TEntryModel,
  TAutoCapitalize,
  TFilterButton,
  TCalendarMode,
} from './types';

export interface IDiaryState {
  entries: TEntryModel[];
}

export interface IChooseImageProps {
  stateImages: string[];
  onFileSelected(value: any): void;
  closeSheet(): void;
}

export interface IImagesContainer {
  images: string[];
  isEditable: boolean;
}

export interface INoteProps {
  id: string;
  title?: string;
  description?: string;
  date?: string;
  image?: string;
}

export interface IInputProps {
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
  isEditable: boolean;
  numberOfLines?: number;
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

export interface IInputStyle {
  defaultInputStyle: ViewStyle;
  selectedInputStyle(value: boolean): ViewStyle;
}

export interface IImagesContainerStyle {
  containerStyle: ViewStyle;
  contentContainerStyle: ViewStyle;
  imageStyle: ViewStyle;
  selectedContainerStyle(value: boolean): ViewStyle;
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

export interface IIconButtonProps {
  onPress(): void;
  iconName: string;
  iconSize: number;
  iconColor: string;
}

export interface IDatePickerProps {
  date: Date;
  mode?: TCalendarMode;
  minimumDate?: Date;
  maximumDate?: Date;
  onDateChange: Dispatch<SetStateAction<Date>>;
  open?: boolean;
  onConfirm?(date: Date): void;
  onCancel?(): void;
}

export interface IBlockButtonsProps {
  buttonsContainerStyle: object;
  calendarButton(): void;
  imageButton(): void;
  recordButton(): void;
  iconeSize: number;
}
