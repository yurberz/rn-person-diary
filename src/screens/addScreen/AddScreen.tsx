import React from 'react';
import {View, Platform, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import styles from './styles';

const AddScreen = () => {

  return (
    <View style={styles.viewContainer}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Button title={'save'} onPress={alert('Button Pressed')}/>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddScreen;
