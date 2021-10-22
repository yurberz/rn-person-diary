import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {FullImageProps} from '../../../../helpers/ts-helpers/types';

const FullImageScreen = ({
  navigation: {goBack},
  route: {params},
}: FullImageProps) => {
  const {image} = params;

  return (
    <View
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
        activeOpacity={0.8}
        onPress={() => goBack()}>
        <Image source={{uri: image}} style={styles.imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default FullImageScreen;

const styles = StyleSheet.create({
  imageStyle: {
    flex: 0.5,
    borderRadius: 7,
  },
});
