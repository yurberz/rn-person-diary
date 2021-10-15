import React, {useRef} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  Platform,
  View,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {ImageProps} from '../../helpers/ts-helpers/interfaces';

const ChooseImage: React.FC<ImageProps> = props => {
  const handleChooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
    })
    .then(image => {
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      props.imageSetter({uri: imageUri});
  });
  }

  const handleCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(image => {
      const imageUri = image.path;
      props.imageSetter({uri: imageUri});
    });
  }

  const renderContent = () => (
    <View style={styles.panel}>
      <TouchableOpacity style={styles.panelButton} onPress={handleCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={handleChooseFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose from library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bottomSheetRef.current!.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  const fall = new Animated.Value(1);
  const bottomSheetRef = useRef<BottomSheet>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => bottomSheetRef.current!.snapTo(0)}
      style={props.imageStyle}>
      <ImageBackground
        style={styles.imageBackground}
        source={props.image}
        imageStyle={styles.image}>
        <Ionicons
          name="camera-outline"
          size={40}
          color="white"
          style={styles.icon}
        />
      </ImageBackground>
      <BottomSheet
        ref={bottomSheetRef}
        initialSnap={0}
        callbackNode={fall}
        snapPoints={[300, 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledGestureInteraction={false}
      />
    </TouchableOpacity>
  );
};

export default ChooseImage;
