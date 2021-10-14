import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface ImageProps {
  imageStyle?: object;
  image: string;
  onPress(): void;
}

const ImagePicker: React.FC<ImageProps> = (props) => {

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onPress}
        style={props.imageStyle}>
        <ImageBackground
          style={styles.imageBackground}
          source={props.image}
          imageStyle={styles.image}>
            <Ionicons
              name="camera-outline"
              size={20}
              color="white"
              style={styles.icon}
            />
        </ImageBackground>
      </TouchableOpacity>
    );

}

export default ImagePicker;