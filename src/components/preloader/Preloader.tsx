import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const Preloader = () => {
  return (
    <View style={styles.containerStyle}>
      <ActivityIndicator size="large" color="rgb(0,122,255)" />
    </View>
  );
};

export default Preloader;
