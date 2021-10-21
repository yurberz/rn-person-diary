import React, {useState} from 'react';
import {View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {Drawer, TouchableRipple, Switch, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerContentProps} from '../../helpers/ts-helpers/types';
import styles from './styles';

const CustomDrawer = ({navigation: {navigate}}: DrawerContentProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSync, setIsSync] = useState(false);
  const [isSecurity, setIsSecurity] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const toggleSync = () => {
    setIsSync(!isSync);
  };
  const toggleSecurity = () => {
    setIsSecurity(!isSecurity);
  };

  return (
    <View style={styles.drawerContainerStyle}>
      <View style={styles.drawerContentStyle}>
        <Drawer.Section title="Navigation">
          <DrawerItem
            icon={() => (
              <Ionicons
                name="md-book-outline"
                size={30}
                color="rgb(0,122,255)"
              />
            )}
            label="Diary"
            onPress={() => navigate('HomeScreen')}
          />
          <DrawerItem
            icon={() => (
              <Ionicons
                name="ios-images-outline"
                size={30}
                color="rgb(0,122,255)"
              />
            )}
            label="Images"
            onPress={() => navigate('ImageGalleryScreen')}
          />
          <DrawerItem
            icon={() => (
              <Ionicons name="cog-outline" size={30} color="rgb(0,122,255)" />
            )}
            label="Settings"
            onPress={() => navigate('SettingsScreen')}
          />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={toggleTheme}>
            <View style={styles.preferenceStyle}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={toggleSync}>
            <View style={styles.preferenceStyle}>
              <Text>Sync Cloud</Text>
              <View pointerEvents="none">
                <Switch value={isSync} />
              </View>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={toggleSecurity}>
            <View style={styles.preferenceStyle}>
              <Text>Security</Text>
              <View pointerEvents="none">
                <Switch value={isSecurity} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </View>
  );
};

export default CustomDrawer;
