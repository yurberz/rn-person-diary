import React from 'react';
import {View} from 'react-native';
import {IBlockButtonsProps} from '../../helpers/ts-helpers/interfaces';
import IconButton from '../iconButton/IconButton';
import {COLORS} from '../../constants/theme';
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
        iconColor={COLORS.blackColor}
        iconSize={iconeSize}
      />

      <IconButton
        onPress={imageButton}
        iconName="ios-images-outline"
        iconColor={COLORS.blackColor}
        iconSize={iconeSize}
      />

      <IconButton
        onPress={recordButton}
        iconName="ios-recording-outline"
        iconColor={COLORS.blackColor}
        iconSize={iconeSize}
      />

      <IconButton
        onPress={geoTagButton}
        iconName={isEditable ? 'ios-navigate' : 'ios-navigate-outline'}
        iconColor={isEditable ? COLORS.greyColor : COLORS.blackColor}
        iconSize={iconeSize}
        isDisabled={isEditable}
      />
    </View>
  );
};

export default ButtonsBlock;
