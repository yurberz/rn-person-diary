import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PINCode, {hasUserSetPinCode} from '@haskkor/react-native-pincode';
import {TPINCodeStatus} from '../helpers/ts-helpers/types';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {showPinLockScreen} from '../redux/reducers/diaryReducer';
import Preloader from './preloader/Preloader';
import DrawerNavigation from '../navigation/DrawerNavigation';

const PersonalDiary: React.FC = () => {
  const dispatch = useAppDispatch();
  const {isPinLockScreen} = useAppSelector(state => state.personalDiary);
  const [PINCodeStatus, setPINCodeStatus] = useState<TPINCodeStatus>('choose');
  const [isPreloader, setIsPreloader] = useState(false);

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
            <NavigationContainer>
              <DrawerNavigation />
            </NavigationContainer>
          )}
        </>
      )}
    </>
  );
};

export default PersonalDiary;
