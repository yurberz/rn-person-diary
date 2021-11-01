import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {MapStackParamList, MapStackProps} from '../../helpers/ts-helpers/types';
import IconButton from '../../components/iconButton/IconButton';
import DefaultMapScreen from './nestedScreens/DefaultMapScreen';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const MapStack = createStackNavigator<MapStackParamList>();

const MapScreen = ({navigation: {dispatch}}: MapStackProps) => {
  return (
    <MapStack.Navigator
      initialRouteName="DefaultMapScreen"
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
      <MapStack.Screen
        name="DefaultMapScreen"
        component={DefaultMapScreen}
        options={{
          title: 'Map',
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
    </MapStack.Navigator>
  );
};

export default MapScreen;
