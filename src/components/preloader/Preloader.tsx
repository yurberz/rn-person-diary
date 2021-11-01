import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {COLORS} from '../../constants/theme';
import styles from './styles';

const Preloader = () => {
  return (
    <View style={styles.containerStyle}>
      <ActivityIndicator size="large" color={COLORS.blueColor} />
    </View>
  );
};

export default Preloader;
