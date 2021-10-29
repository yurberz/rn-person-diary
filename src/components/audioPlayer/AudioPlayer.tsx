import React from 'react';
import {View} from 'react-native';
import {IAudioPlayerProps} from '../../helpers/ts-helpers/interfaces';
import IconButton from '../iconButton/IconButton';
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
        iconSize={35}
        iconColor={isPlaying ? 'rgb(0,122,255)' : 'rgb(28, 28, 30)'}
        buttonStyle={styles.buttonStyle}
      />

      {isEditable && (
        <IconButton
          onPress={() => setRecording('')}
          iconName="ios-close-outline"
          iconSize={25}
          iconColor="rgb(28, 28, 30)"
        />
      )}
    </View>
  );
};

export default AudioPlayer;
