import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';
import {AudioRecorderScreenProps} from '../../helpers/ts-helpers/types';
import styles from './styles';
import AudioRecorder from '../../components/audioRecorder/AudioRecorder';

const AudioRecorderScreen = ({navigation, route}: AudioRecorderScreenProps) => {
  const {navigate, goBack} = navigation;
  const {prevScreen} = route.params;
  const [recording, setRecording] = useState<any>();
  const [isRecording, setIsRecording] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    (async () => {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    })();
  }, []);

  const onLongPress = async () => {
    try {
      const {recording} = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
      );

      setRecording(recording);
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const onPressOut = async () => {
    setRecording(undefined);
    setIsRecording(false);

    await recording.stopAndUnloadAsync();
    const uri: any = recording.getURI();

    navigate(routeName(), {
      uri: uri,
    });
  };

  const routeName = () => {
    return prevScreen === 'AddScreen' ? 'AddScreen' : 'NoteScreen';
  };

  if (
    (!isRecording && remainingTime !== 60 && !!recording) ||
    remainingTime === 0
  ) {
    if (!!recording) {
      onPressOut();
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => goBack()}
      style={styles.container}>
      <AudioRecorder
        isRecording={isRecording}
        duration={60}
        setRemainingTime={setRemainingTime}
        onLongPress={onLongPress}
        onPressOut={onPressOut}
      />
    </TouchableOpacity>
  );
};

export default AudioRecorderScreen;
