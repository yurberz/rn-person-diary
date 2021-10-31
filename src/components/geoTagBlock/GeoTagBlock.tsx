import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IGeoTagBlockProps} from '../../helpers/ts-helpers/interfaces';
import IconButton from '../iconButton/IconButton';
import {COLORS} from '../../constants/theme';
import styles from './styles';

const GeoTagBlock: React.FC<IGeoTagBlockProps> = ({
  marker,
  isEditable,
  onPress,
}) => {
  const latitude = marker?.latitude;
  const longitude = marker?.longitude;

  return (
    <View
      style={[
        styles.defaultContainerStyle,
        styles.selectedContainerStyle(isEditable),
      ]}>
      <View style={styles.leftSideContainerStyle}>
        <Ionicons
          name="ios-locate-outline"
          size={30}
          color={COLORS.blueColor}
        />

        <Text style={styles.textStyle}>
          {latitude}, {longitude}
        </Text>
      </View>

      {isEditable && (
        <IconButton
          iconName="ios-close-outline"
          iconSize={15}
          iconColor={COLORS.blackColor}
          onPress={onPress}
        />
      )}
    </View>
  );
};

export default GeoTagBlock;
