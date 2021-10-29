import React from 'react';
import {View} from 'react-native';
import {IBlockButtonsProps} from '../../helpers/ts-helpers/interfaces';
import IconButton from '../iconButton/IconButton';
import styles from './styles';

const ButtonsBlock: React.FC<IBlockButtonsProps> = ({
  buttonsContainerStyle,
  calendarButton,
  imageButton,
  recordButton,
  geoTagButton,
  iconeSize,
  isEditable,
}) => {
  return (
    <View style={[styles.defaultButtonContainerStyle, buttonsContainerStyle]}>
      <IconButton
        onPress={calendarButton}
        iconName="ios-calendar-outline"
        iconColor="rgb(28, 28, 30)"
        iconSize={iconeSize}
      />

      <IconButton
        onPress={imageButton}
        iconName="ios-images-outline"
        iconColor="rgb(28, 28, 30)"
        iconSize={iconeSize}
      />

      <IconButton
        onPress={recordButton}
        iconName="ios-recording-outline"
        iconColor="rgb(28, 28, 30)"
        iconSize={iconeSize}
      />

      <IconButton
        onPress={geoTagButton}
        iconName="navigate"
        iconColor={isEditable ? 'gray' : "rgb(28, 28, 30)"}
        iconSize={iconeSize}
        isDisabled={isEditable}
      />
    </View>
  );
};

export default ButtonsBlock;
