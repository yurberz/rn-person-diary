import {StackScreenProps} from '@react-navigation/stack';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {INoteProps} from './interfaces';

export type HomeStackParamList = {
  DefaultHomeScreen: undefined;
  AddScreen: undefined;
  NoteScreen: {note: INoteProps};
  FullImageScreen: {
    image: string;
  };
  AudioRecorderScreen: undefined;
};

export type HomeStackProps = StackScreenProps<
  HomeStackParamList,
  'DefaultHomeScreen'
>;

export type FullImageProps = StackScreenProps<
  HomeStackParamList,
  'FullImageScreen'
>;

export type ImageGalleryStackParamList = {
  DefaultImageGalleryScreen: {
    image: string;
  };
  FullImageScreen: {
    image: string;
  };
};

export type ImageGalleryStackProps = StackScreenProps<
  ImageGalleryStackParamList,
  'DefaultImageGalleryScreen'
>;

export type SettingsStackParamList = {
  DefaultSettingsScreen: undefined;
};

export type SettingsStackProps = StackScreenProps<
  SettingsStackParamList,
  'DefaultSettingsScreen'
>;

export type DrawerParamList = {
  HomeScreen: undefined;
  ImageGalleryScreen: undefined;
  SettingsScreen: undefined;
};

export type DrawerContentProps = DrawerContentComponentProps;

export type TEntryModel = {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  images: TImageModel[];
  audio?: string;
};

export type TAutoCapitalize = 'none' | 'sentences' | 'words' | 'characters';

export type TFilterButton = {
  id: string;
  title: string;
};

export type TCalendarMode = 'datetime' | 'date' | 'time';

export type TImageModel = {
  id: string;
  url: string;
};

export type TPINCodeStatus = 'choose' | 'enter' | 'locked';
