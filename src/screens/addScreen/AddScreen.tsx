import React, {useState} from 'react';
import {View, Platform, KeyboardAvoidingView,} from 'react-native';
import ChooseImage from '../../components/chooseImage/ChooseImage';
import styles from './styles';

const AddScreen = () => {
  const [image, setImage] = useState({uri: '#'})

  return (
    <View style={styles.viewContainer}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ChooseImage 
      imageStyle={styles.image}
      image={image}
      imageSetter={setImage}
      />
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddScreen;
