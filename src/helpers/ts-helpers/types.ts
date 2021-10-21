import {StackScreenProps} from '@react-navigation/stack';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import { INoteProps } from './interfaces';

export type HomeStackParamList = {
  DefaultHomeScreen: undefined;
  AddScreen: undefined;
  NoteScreen: {note: INoteProps};
};

export type HomeStackProps = StackScreenProps<
  HomeStackParamList,
  'DefaultHomeScreen'
>;

export type SearchStackParamList = {
  DefaultSearchScreen: undefined;
};

export type SearchStackProps = StackScreenProps<
  SearchStackParamList,
  'DefaultSearchScreen'
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
  SearchScreen: undefined;
  SettingsScreen: undefined;
};

export type DrawerContentProps = DrawerContentComponentProps;

export type TEntryModel = {
  id: string;
  date: string;
  title?: string;
  description?: string;
  tags?: string[];
  images?: string[];
  audio?: string;
};

export type TAutoCapitalize = 'none' | 'sentences' | 'words' | 'characters';

export type TFilterButton = {
  id: string;
  title: string;
};

export type TCalendarMode = 'datetime' | 'date' | 'time';
