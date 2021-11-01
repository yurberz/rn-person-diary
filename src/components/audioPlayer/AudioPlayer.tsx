import React from 'react';
import {View} from 'react-native';
import {IAudioPlayerProps} from '../../helpers/ts-helpers/interfaces';
import IconButton from '../iconButton/IconButton';
import {COLORS} from '../../constants/theme';
import styles from './styles';

const AudioPlayer: React.FC<IAudioPlayerProps> = ({
  isPlaying,
  playSound,
  setRecording,
  isEditable = true,
}) => {
  return (
    <View style={styles.playerContainerStyle}>
      <IconButton
        onPress={playSound}
        iconName={isPlaying ? 'ios-play-circle' : 'ios-play-circle-outline'}
        iconSize={30}
        iconColor={isPlaying ? COLORS.blueColor : COLORS.blackColor}
        buttonStyle={styles.buttonStyle}
      />

      {isEditable && (
        <IconButton
          onPress={() => setRecording('')}
          iconName="ios-close-outline"
          iconSize={15}
          iconColor={COLORS.blackColor}
        />
      )}
    </View>
  );
};

export default AudioPlayer;
