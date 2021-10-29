import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import SettingsScreen from '../screens/mapScreen/MapScreen';
import AddScreen from '../screens/homeScreen/nestedScreens/addScreen/AddScreen';
import SearchScreen from '../screens/imageGalleryScreen/ImageGalleryScreen';
import NoteScreen from '../screens/homeScreen/nestedScreens/noteScreen/NoteScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AddStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();

const StackHomeScreen = ({navigation: {navigate}}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}>
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
      <HomeStack.Screen name="Note" component={NoteScreen} />
    </HomeStack.Navigator>
  );
};
const StackAddScreen = () => (
  <AddStack.Navigator>
    <AddStack.Screen
      name="AddNotePage"
      component={AddScreen}
      options={{
        headerTitle: 'Add a diary entry',
        headerShadowVisible: false,
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
        headerShadowVisible: false,
      }}
    />
  </SearchStack.Navigator>
);

const NavigationTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

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
        tabBarStyle: {
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen name="HomeScreen" component={StackHomeScreen} />
      <Tab.Screen name="AddScreen" component={StackAddScreen} />
      <Tab.Screen name="SearchScreen" component={StackSearchScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTabBar;

// import React from 'react';
// import {TouchableOpacity} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import HomeScreen from '../screens/homeScreen/HomeScreen';
// import SettingsScreen from '../screens/settingsScreen/SettingsScreen';
// import AddScreen from '../screens/homeScreen/nestedScreens/addScreen/AddScreen';
// import SearchScreen from '../screens/searchScreen/SearchScreen';
// import NoteScreen from '../screens/homeScreen/nestedScreens/noteScreen/NoteScreen';

// const Tab = createBottomTabNavigator();
// const HomeStack = createNativeStackNavigator();
// const AddStack = createNativeStackNavigator();
// const SearchStack = createNativeStackNavigator();

// const StackHomeScreen = ({navigation: {navigate}}) => {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerShadowVisible: false,
//       }}>
//       <HomeStack.Screen
//         name="HomePage"
//         component={HomeScreen}
//         options={{
//           headerTitle: 'All Notes',
//           headerRight: () => (
//             <TouchableOpacity onPress={() => navigate('Settings')}>
//               <Ionicons name={'cog'} size={30} color={'gray'} />
//             </TouchableOpacity>
//           ),
//         }}
//       />
//       <HomeStack.Screen name="Settings" component={SettingsScreen} />
//       <HomeStack.Screen name="Note" component={NoteScreen} />
//     </HomeStack.Navigator>
//   );
// };
// const StackAddScreen = () => (
//   <AddStack.Navigator>
//     <AddStack.Screen
//       name="AddNotePage"
//       component={AddScreen}
//       options={{
//         headerTitle: 'Add a diary entry',
//         headerShadowVisible: false,
//       }}
//     />
//   </AddStack.Navigator>
// );

// const StackSearchScreen = () => (
//   <SearchStack.Navigator>
//     <SearchStack.Screen
//       name="SearchPage"
//       component={SearchScreen}
//       options={{
//         headerTitle: 'Search for Notes',
//         headerShadowVisible: false,
//       }}
//     />
//   </SearchStack.Navigator>
// );

// const NavigationTabBar = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={({route}) => ({
//         tabBarLabel: '',
//         headerShown: false,
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName = '';

//           if (route.name === 'HomeScreen') {
//             iconName = focused ? 'list' : 'list-outline';
//           } else if (route.name === 'SearchScreen') {
//             iconName = focused ? 'search' : 'search-outline';
//           } else if (route.name === 'AddScreen') {
//             iconName = focused ? 'add-circle' : 'add-circle-outline';
//             size = 35;
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           borderTopWidth: 0,
//         },
//       })}>
//       <Tab.Screen name="HomeScreen" component={StackHomeScreen} />
//       <Tab.Screen name="AddScreen" component={StackAddScreen} />
//       <Tab.Screen name="SearchScreen" component={StackSearchScreen} />
//     </Tab.Navigator>
//   );
// };

// export default NavigationTabBar;
