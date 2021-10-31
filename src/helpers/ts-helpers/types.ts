import {StackScreenProps} from '@react-navigation/stack';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {IMarkerProps} from './interfaces';

export type HomeStackParamList = {
  DefaultHomeScreen: undefined;
  AddScreen: {
    uri: string;
    marker: IMarkerProps | undefined;
  };
  NoteScreen: {
    entryId: string;
    uri: string | undefined;
    marker: IMarkerProps | undefined;
  };
  FullImageScreen: {
    image: string;
  };
  AudioRecorderScreen: {
    prevScreen: string;
  };
  GeoTagScreen: {
    noteTitle: string;
    prevScreen: string;
  };
};

export type HomeStackProps = StackScreenProps<
  HomeStackParamList,
  'DefaultHomeScreen'
>;

export type AddScreenProps = StackScreenProps<HomeStackParamList, 'AddScreen'>;

export type GeoTagScreenProps = StackScreenProps<
  HomeStackParamList,
  'GeoTagScreen'
>;

export type NoteScreenProps = StackScreenProps<
  HomeStackParamList,
  'NoteScreen'
>;

export type AudioRecorderScreenProps = StackScreenProps<
  HomeStackParamList,
  'AudioRecorderScreen'
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

export type MapStackParamList = {
  DefaultMapScreen: {
    image: string;
  };
};

export type MapStackProps = StackScreenProps<
  MapStackParamList,
  'DefaultMapScreen'
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
  MapScreen: undefined;
};

export type DrawerContentProps = DrawerContentComponentProps;

export type TEntryModel = {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  images: TImageModel[];
  audio: string;
  marker: IMarkerProps;
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
