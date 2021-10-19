import {Dispatch, ForwardedRef, LegacyRef, SetStateAction} from 'react';
import {ReturnKeyType, ImageSourcePropType, ViewStyle} from 'react-native';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {
  TEntryModel,
  TAutoCapitalize,
  TFilterButton,
  TCalendarMode,
} from './types';

export interface IDiaryState {
  entries: TEntryModel[];
}

// export interface ImageProps {
//   imageStyle?: object;
//   image?: ImageSourcePropType;
//   imageSetter: React.Dispatch<
//     React.SetStateAction<{
//       uri: string;
//     }>
//   >;
// }

export interface IChooseImageProps {
  stateImages: string[];
  onFileSelected(value: any): void;
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
  onDateChange?: Dispatch<SetStateAction<Date>>;
  open?: boolean;
  onConfirm?(date: Date): void;
  onCancel?(): void;
  iconProps?: IIconButtonProps;
}
