import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import PINCode, {hasUserSetPinCode} from '@haskkor/react-native-pincode';
import {TPINCodeStatus} from '../helpers/ts-helpers/types';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {showPinLockScreen} from '../redux/reducers/diaryReducer';
import Preloader from './preloader/Preloader';
import DrawerNavigation from '../navigation/DrawerNavigation';
import {COLORS} from '../constants/theme';

const PersonalDiary: React.FC = () => {
  const dispatch = useAppDispatch();
  const {isPinLockScreen, isDarkTheme} = useAppSelector(
    state => state.personalDiary,
  );
  const [PINCodeStatus, setPINCodeStatus] = useState<TPINCodeStatus>('choose');
  const [isPreloader, setIsPreloader] = useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: COLORS.whiteColor,
      text: COLORS.blackColor,
    },
  };
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: COLORS.blackColor,
      text: COLORS.whiteColor,
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    showEnterPinLock();
    setIsPreloader(true);

    setTimeout(() => {
      setIsPreloader(false);
    }, 750);
  }, []);

  const showEnterPinLock = async () => {
    const hasPin = await hasUserSetPinCode();

    if (hasPin) {
      dispatch(showPinLockScreen());
      setPINCodeStatus('enter');
    }
  };

  const finishProcess = async () => {
    const hasPin = await hasUserSetPinCode();

    if (hasPin && PINCodeStatus === 'choose') {
      Alert.alert('', 'You have successfully set your pin.', [
        {
          text: 'OK',
          style: 'default',
          onPress: () => {},
        },
      ]);
    }

    dispatch(showPinLockScreen());
    setPINCodeStatus('choose');
  };

  return (
    <>
      {isPreloader ? (
        <Preloader />
      ) : (
        <>
          {isPinLockScreen ? (
            <PINCode
              status={PINCodeStatus}
              touchIDDisabled={true}
              finishProcess={finishProcess}
            />
          ) : (
            <PaperProvider theme={theme}>
              <NavigationContainer theme={theme}>
                <DrawerNavigation />
              </NavigationContainer>
            </PaperProvider>
          )}
        </>
      )}
    </>
  );
};

export default PersonalDiary;
