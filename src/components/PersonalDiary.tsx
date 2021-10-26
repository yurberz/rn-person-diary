import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PINCode, {hasUserSetPinCode} from '@haskkor/react-native-pincode';
import {TPINCodeStatus} from '../helpers/ts-helpers/types';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {showPinLockScreen} from '../redux/reducers/diaryReducer';
import TestScreen from '../screens/TestScreen';
import DrawerNavigation from '../navigation/DrawerNavigation';
import AudioRecorderScreen from '../screens/audioRecorderScreen/AudioRecorderScreen';

const PersonalDiary: React.FC = () => {
  const dispatch = useAppDispatch();
  const {isPinLockScreen} = useAppSelector(state => state.personalDiary);
  const [PINCodeStatus, setPINCodeStatus] = useState<TPINCodeStatus>('choose');

  useEffect(() => {
    showEnterPinLock();
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
      {/* <TestScreen /> */}
      {/* <AudioRecorderScreen /> */}
    </>
  );
};

export default PersonalDiary;
