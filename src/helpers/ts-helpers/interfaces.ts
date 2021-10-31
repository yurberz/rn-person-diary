import {Dispatch, SetStateAction} from 'react';
import {ImageStyle, ReturnKeyType, ViewStyle} from 'react-native';
import {
  TEntryModel,
  TAutoCapitalize,
  TFilterButton,
  TCalendarMode,
  TImageModel,
} from './types';

export interface IDiaryState {
  entries: TEntryModel[];
  isSecurity: boolean;
  isPinLockScreen: boolean;
}

export interface IChooseImageProps {
  stateImages: TImageModel[];
  onFileSelected(value: any): void;
  closeSheet(): void;
}

export interface IImagesBlockProps {
  images: TImageModel[];
  onPress(id: string, url: string): void;
  iconName: string;
  iconSize: number;
  iconColor: string;
  iconStyle: object;
  editable: boolean;
}

export interface IMarkerProps {
  latitude: number;
  longitude: number;
}

export interface INoteProps {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  audio: string;
  images: TImageModel[];
  marker: IMarkerProps;
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

export interface IGeoTagBlockProps {
  isEditable: boolean;
  marker: IMarkerProps;
  onPress(): void;
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

export interface IGeoTagBlockStyle {
  defaultContainerStyle: ViewStyle;
  selectedContainerStyle(value: boolean): ViewStyle;
  textStyle: ViewStyle;
  iconStyle: ViewStyle;
  leftSideContainerStyle: ViewStyle;
}

export interface IImagesBlockStyle {
  columnWrapperStyle: ViewStyle;
  flatListStyle: ViewStyle;
  imageStyle: ImageStyle;
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
  buttonStyle?: object;
  isDisabled?: boolean;
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
  geoTagButton(): void;
  iconeSize: number;
  isEditable?: boolean;
}

export interface ISectionImageData {
  key: string;
  list: TImageModel[];
}

export interface IAudioRecorderProps {
  isRecording: boolean;
  duration: number;
  setRemainingTime(value: number): void;
  onLongPress(): void;
  onPressOut(): void;
}

export interface IAudioPlayerProps {
  isPlaying: boolean;
  playSound(): void;
  setRecording(value: string): void;
  isEditable?: boolean;
}

export interface INoteCellProps {
  note: TEntryModel;
  onPress(): void;
}
