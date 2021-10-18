import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {
  SettingsStackParamList,
  SettingsStackProps,
} from '../../helpers/ts-helpers/types';
import IconButton from '../../components/iconButton/IconButton';
import DefaultSettingsScreen from './nestedScreens/defaultSettingsScreen/DefaultSettingsScreen';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsScreen = ({navigation: {dispatch}}: SettingsStackProps) => {
  return (
    <SettingsStack.Navigator
      initialRouteName="DefaultSettingsScreen"
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
      <SettingsStack.Screen
        name="DefaultSettingsScreen"
        component={DefaultSettingsScreen}
        options={{
          title: 'Settings',
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
    </SettingsStack.Navigator>
  );
};

export default SettingsScreen;
