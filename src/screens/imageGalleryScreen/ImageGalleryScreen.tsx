import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {
  ImageGalleryStackParamList,
  ImageGalleryStackProps,
} from '../../helpers/ts-helpers/types';
import IconButton from '../../components/iconButton/IconButton';
import DefaultSearchScreen from './nestedScreens/defaultSearchScreen/DefaultImageGalleryScreen';
import FullImageScreen from '../homeScreen/nestedScreens/fullImageScreen/FullImageScreen';

const ImageGalleryStack = createStackNavigator<ImageGalleryStackParamList>();

const ImageGalleryScreen = ({
  navigation: {dispatch},
}: ImageGalleryStackProps) => {
  return (
    <ImageGalleryStack.Navigator
      initialRouteName="DefaultImageGalleryScreen"
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
      <ImageGalleryStack.Screen
        name="DefaultImageGalleryScreen"
        component={DefaultSearchScreen}
        options={{
          title: 'Images',
          headerLeft: () => (
            <IconButton
              onPress={() => dispatch(DrawerActions.openDrawer())}
              iconName="ios-menu-outline"
              iconSize={30}
              iconColor="rgb(0,122,255)"
            />
          ),
        }}
      />
      <ImageGalleryStack.Screen
        name="FullImageScreen"
        component={FullImageScreen}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
    </ImageGalleryStack.Navigator>
  );
};

export default ImageGalleryScreen;
