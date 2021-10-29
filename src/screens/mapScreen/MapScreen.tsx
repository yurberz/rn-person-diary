import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {MapStackParamList, MapStackProps} from '../../helpers/ts-helpers/types';
import IconButton from '../../components/iconButton/IconButton';
import DefaultMapScreen from './nestedScreens/defaultSettingsScreen/DefaultMapScreen';

const MapStackStack = createStackNavigator<MapStackParamList>();

const MapScreen = ({navigation: {dispatch}}: MapStackProps) => {
  return (
    <MapStackStack.Navigator
      initialRouteName="DefaultMapScreen"
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
      <MapStackStack.Screen
        name="DefaultMapScreen"
        component={DefaultMapScreen}
        options={{
          title: 'All markers',
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
    </MapStackStack.Navigator>
  );
};

export default MapScreen;
