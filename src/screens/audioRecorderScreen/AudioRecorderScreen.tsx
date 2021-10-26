import React, {useState, useEffect} from 'react';
import {View, Animated, Pressable, Text} from 'react-native';
import {Audio} from 'expo-av';
import {Recording} from 'expo-av/build/Audio';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import LinearGradient from 'react-native-linear-gradient';
import {HomeStackProps} from '../../helpers/ts-helpers/types';
import styles from './styles';

const AudioRecorderScreen = (/*{navigation: {goBack}}: HomeStackProps*/) => {
  const [recording, setRecording] = useState<Recording>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [constTime, setConstTime] = useState(20);
  console.log('STATE RECORDING: ', JSON.stringify(recording, null, 2));

  useEffect(() => {
    (async () => {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    })();
  }, []);

  const onLonePress = async () => {
    try {
      console.log('Starting recording..');

      const {recording} = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
      );

      setRecording(recording);
      setIsPlaying(true);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const onPressOut = () => {
    stopRecording();
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');

    setRecording(undefined);
    setIsPlaying(false);

    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
  };

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={constTime}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2],
        ]}>
        {({remainingTime, animatedColor}) => (
          <Pressable onLongPress={onLonePress} onPressOut={onPressOut}>
            <LinearGradient
              colors={['#F7B801', '#A30000']}
              style={styles.linearGradient}>
              <Animated.Text style={styles.textStyle}>
                {remainingTime}
              </Animated.Text>
              <Text style={styles.secsTextStyle}>secs left</Text>
            </LinearGradient>
          </Pressable>
        )}
      </CountdownCircleTimer>
    </View>
  );
};

export default AudioRecorderScreen;
