import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {
  HomeStackParamList,
  HomeStackProps,
} from '../../helpers/ts-helpers/types';
import IconButton from '../../components/iconButton/IconButton';
import DefaultHomeScreen from './nestedScreens/defaultHomeScreen/DefaultHomeScreen';
import AddScreen from './nestedScreens/addScreen/AddScreen';
import NoteScreen from './nestedScreens/noteScreen/NoteScreen';
import FullImageScreen from '../fullImageScreen/FullImageScreen';
import AudioRecorderScreen from '../audioRecorderScreen/AudioRecorderScreen';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeScreen = ({
  navigation: {navigate, goBack, dispatch},
}: HomeStackProps) => {
  return (
    <HomeStack.Navigator
      initialRouteName="DefaultHomeScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          paddingStart: 10,
        },
        headerRightContainerStyle: {
          paddingEnd: 10,
        },
      }}>
      <HomeStack.Screen
        name="DefaultHomeScreen"
        component={DefaultHomeScreen}
        options={{
          title: 'Diary',
          headerLeft: () => (
            <IconButton
              onPress={() => dispatch(DrawerActions.openDrawer())}
              iconName="ios-menu-outline"
              iconSize={30}
              iconColor="rgb(0,122,255)"
            />
          ),
          headerRight: () => (
            <IconButton
              onPress={() => navigate('AddScreen')}
              iconName="create-outline"
              iconSize={30}
              iconColor="rgb(48, 2, 30)"
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="NoteScreen"
        component={NoteScreen}
        options={{
          title: 'Entry',
          headerLeft: () => (
            <IconButton
              onPress={() => goBack()}
              iconName="caret-back-outline"
              iconSize={30}
              iconColor="black"
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          title: 'Add a diary entry',
          headerLeft: () => (
            <IconButton
              onPress={() => goBack()}
              iconName="close-sharp"
              iconSize={30}
              iconColor="rgb(255,69,68)"
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="FullImageScreen"
        component={FullImageScreen}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
      <HomeStack.Screen
        name="AudioRecorderScreen"
        component={AudioRecorderScreen}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
