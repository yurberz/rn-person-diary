import React, {useState, useEffect} from 'react';
import {View, Animated, Pressable, Text} from 'react-native';
import {Audio} from 'expo-av';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import LinearGradient from 'react-native-linear-gradient';
import {HomeStackProps} from '../../helpers/ts-helpers/types';
import styles from './styles';

const AudioRecorderScreen = ({navigation: {navigate}}: HomeStackProps) => {
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

    navigate({
      name: 'AddScreen',
      params: {
        uri: uri,
      },
    });
  };

  if (
    (!isRecording && remainingTime !== 5 && !!recording) ||
    remainingTime === 0
  ) {
    if (!!recording) {
      onPressOut();
    }
  }

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isRecording}
        duration={5}
        colors={[
          ['#007940', 0.6],
          ['#D12229', 0.4],
        ]}>
        {({remainingTime}) => {
          useEffect(() => {
            setRemainingTime(remainingTime);
          }, [remainingTime]);

          return (
            <Pressable onLongPress={onLongPress} onPressOut={onPressOut}>
              <LinearGradient
                colors={[
                  '#D12229',
                  '#F68A1E',
                  '#FDE01A',
                  '#007940',
                  '#24408E',
                  '#732982',
                ]}
                style={styles.linearGradient}>
                <Animated.Text style={styles.textStyle}>
                  {remainingTime}
                </Animated.Text>
                <Text style={styles.secsTextStyle}>secs left</Text>
              </LinearGradient>
            </Pressable>
          );
        }}
      </CountdownCircleTimer>
    </View>
  );
};

export default AudioRecorderScreen;
