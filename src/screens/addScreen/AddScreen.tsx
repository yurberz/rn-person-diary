import React, {useState} from 'react';
import {View, Platform, KeyboardAvoidingView,} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ChooseImage from '../../components/chooseImage/ChooseImage';
import styles from './styles';

const AddScreen = () => {
  const [image, setImage] = useState({uri: '#'})

  const handleChooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
    })
    .then(image => {
      const imageUri = image.path;
      // Platform.OS === 'ios' ? image.sourceURL :
      setImage({uri: imageUri});
  });
  }

  const handleCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(image => {
      const imageUri = image.path;
      setImage({uri: imageUri});
    });
  }
  
  return (
    <View style={styles.viewContainer}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ChooseImage 
      imageStyle={styles.image}
      image={image}
      handleCamera={handleCamera}
      handleGellery={handleChooseFromLibrary}
      />
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddScreen;
