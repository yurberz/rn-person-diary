import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddScreen from '../screens/addScreen/AddScreen';
import SearchScreen from '../screens/searchScreen/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AddStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();

const StackHomeScreen = ({navigation: {navigate}}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          headerTitle: 'All Notes',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigate('Settings')}>
              <Ionicons name={'cog'} size={30} color={'gray'} />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
};
const StackAddScreen = ({navigation: {navigate}}) => (
  <AddStack.Navigator>
    <AddStack.Screen
      name="AddNotePage"
      component={AddScreen}
      options={{
        headerTitle: 'Add Note',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigate('HomePage')}>
            <Ionicons name={'checkmark-sharp'} size={30} color={'gray'} />
          </TouchableOpacity>
        ),
      }}
    />
  </AddStack.Navigator>
);
const StackSearchScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="SearchPage"
      component={SearchScreen}
      options={{
        headerTitle: 'Search for Notes',
      }}
    />
  </SearchStack.Navigator>
);

const NavigationTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'SearchScreen') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'AddScreen') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
            size = 35;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HomeScreen" component={StackHomeScreen} />
      <Tab.Screen name="AddScreen" component={StackAddScreen} />
      <Tab.Screen name="SearchScreen" component={StackSearchScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTabBar;
