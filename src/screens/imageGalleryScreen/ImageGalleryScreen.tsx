import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {
  ImageGalleryStackParamList,
  ImageGalleryStackProps,
} from '../../helpers/ts-helpers/types';
import IconButton from '../../components/iconButton/IconButton';
import DefaultSearchScreen from './nestedScreens/defaultImageGalleryScreen/DefaultImageGalleryScreen';
import FullImageScreen from '../fullImageScreen/FullImageScreen';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

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
        headerTitleStyle: {
          ...FONTS.h1,
        },
        headerLeftContainerStyle: {
          paddingStart: SIZES.padding10,
        },
        headerRightContainerStyle: {
          paddingEnd: SIZES.padding10,
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
              iconColor={COLORS.blueColor}
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
