import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList} from '../helpers/ts-helpers/types';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import ImageGalleryScreen from '../screens/imageGalleryScreen/ImageGalleryScreen';
import MapScreen from '../screens/mapScreen/MapScreen';
import CustomDrawer from '../components/customDrawer/CustomDrawer';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Diary',
        }}
      />
      <Drawer.Screen
        name="ImageGalleryScreen"
        component={ImageGalleryScreen}
        options={{
          title: 'Images',
        }}
      />
      <Drawer.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'Geotags',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
