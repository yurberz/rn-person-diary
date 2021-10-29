import React, {useEffect} from 'react';
import {Animated, Pressable, Text, View} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IAudioRecorderProps} from '../../helpers/ts-helpers/interfaces';
import styles from './styles';

const AudioRecorder: React.FC<IAudioRecorderProps> = ({
  isRecording,
  duration,
  setRemainingTime,
  onLongPress,
  onPressOut,
}) => {
  return (
    <CountdownCircleTimer
      isPlaying={isRecording}
      duration={duration}
      colors={[
        ['#008000', 0.8],
        ['#FF0000', 0.2],
      ]}
      size={120}
      strokeWidth={10}>
      {({remainingTime}) => {
        useEffect(() => {
          setRemainingTime(remainingTime);
        }, [remainingTime]);

        return (
          <View>
            <View style={styles.textContainerStyle}>
              <Animated.Text style={styles.textStyle}>
                {remainingTime}
              </Animated.Text>

              <Text style={styles.secsTextStyle}>secs left</Text>
            </View>

            <Pressable onLongPress={onLongPress} onPressOut={onPressOut}>
              <View style={styles.iconContainerStyle}>
                <Ionicons
                  name="ios-mic-outline"
                  size={60}
                  color={isRecording ? '#FF0000' : 'rgb(10, 132, 255)'}
                />
              </View>
            </Pressable>
          </View>
        );
      }}
    </CountdownCircleTimer>
  );
};

export default AudioRecorder;
