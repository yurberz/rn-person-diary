import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {Drawer, TouchableRipple, Switch, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  deleteUserPinCode,
  resetPinCodeInternalStates,
} from '@haskkor/react-native-pincode';
import {DrawerContentProps} from '../../helpers/ts-helpers/types';
import {
  showPinLockScreen,
  toggleOnOffSecurity,
} from '../../redux/reducers/diaryReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import styles from './styles';

const CustomDrawer = ({navigation: {navigate}}: DrawerContentProps) => {
  const dispatch = useAppDispatch();
  const {isSecurity} = useAppSelector(state => state.personalDiary);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const toggleSecurity = () => {
    dispatch(toggleOnOffSecurity());

    isSecurity ? clearPin() : dispatch(showPinLockScreen());
  };

  const clearPin = async () => {
    await deleteUserPinCode();
    await resetPinCodeInternalStates();

    Alert.alert('', 'You have delete your pin.', [
      {
        text: 'OK',
        style: 'default',
        onPress: () => {},
      },
    ]);
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
          <TouchableRipple onPress={toggleSecurity}>
            <View style={styles.preferenceStyle}>
              <Text>PIN Lock</Text>
              <View pointerEvents="none">
                <Switch value={isSecurity} />
              </View>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={toggleTheme}>
            <View style={styles.preferenceStyle}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </View>
  );
};

export default CustomDrawer;
