import React from 'react';
import {Alert, View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {
  Drawer,
  TouchableRipple,
  Switch,
  Text,
  useTheme,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  deleteUserPinCode,
  resetPinCodeInternalStates,
} from '@haskkor/react-native-pincode';
import {DrawerContentProps} from '../../helpers/ts-helpers/types';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {
  showPinLockScreen,
  toggleOnOffDarkTheme,
  toggleOnOffSecurity,
} from '../../redux/reducers/diaryReducer';
import {COLORS} from '../../constants/theme';
import styles from './styles';

const CustomDrawer = ({navigation: {navigate}}: DrawerContentProps) => {
  const dispatch = useAppDispatch();
  const {isSecurity} = useAppSelector(state => state.personalDiary);
  const paperTheme = useTheme();

  const toggleTheme = () => {
    dispatch(toggleOnOffDarkTheme());
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
                color={COLORS.blueColor}
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
                color={COLORS.blueColor}
              />
            )}
            label="Images"
            onPress={() => navigate('ImageGalleryScreen')}
          />
          <DrawerItem
            icon={() => (
              <Ionicons name="map-sharp" size={30} color={COLORS.blueColor} />
            )}
            label="Map"
            onPress={() => navigate('MapScreen')}
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
                <Switch value={paperTheme.dark} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </View>
  );
};

export default CustomDrawer;
