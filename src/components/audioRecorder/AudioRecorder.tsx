import React, {useEffect} from 'react';
import {Animated, Pressable, Text, View} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IAudioRecorderProps} from '../../helpers/ts-helpers/interfaces';
import {COLORS} from '../../constants/theme';
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
        ['#30D131', 0.8],
        ['#FF453A', 0.2],
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
                  color={isRecording ? COLORS.redColor : COLORS.blueColor}
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
