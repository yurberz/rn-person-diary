import React, {forwardRef} from 'react';
import {TouchableOpacity, Text, View, Platform} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import BottomSheet from 'react-native-raw-bottom-sheet';
import {IChooseImageProps} from '../../helpers/ts-helpers/interfaces';
import {styles, sheetStyles} from './styles';

const ChooseImage = forwardRef<BottomSheet, IChooseImageProps>(
  ({stateImages, onFileSelected, closeSheet}, ref) => {
    const options = [
      {
        text: 'Take image from Camera',
        onPress: () => {
          ImageCropPicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
            freeStyleCropEnabled: true,
          })
            .then(image => {
              onFileSelected([...stateImages, image.path]);
            })
            .catch(err => {});
        },
      },
      {
        text: 'Choose images from Gallery',
        onPress: () => {
          ImageCropPicker.openPicker({
            multiple: true,
            width: 400,
            height: 400,
            cropping: true,
            freeStyleCropEnabled: true,
          })
            .then(images => {
              const arrOfLinks = images.map(image => {
                return Platform.OS === 'ios' ? image.sourceURL : image.path;
              });

              onFileSelected([...stateImages, ...arrOfLinks]);
            })
            .catch(err => {});
        },
      },
      {
        text: 'Cancel',
        onPress: () => closeSheet(),
      },
    ];

    return (
      <BottomSheet
        ref={ref}
        height={280}
        openDuration={250}
        closeDuration={250}
        animationType="fade"
        dragFromTopOnly
        closeOnDragDown
        customStyles={sheetStyles}>
        <View style={styles.optionsContainerStyle}>
          {options.map(({text, onPress}, index) => (
            <TouchableOpacity
              style={styles.optionPickerStyle}
              activeOpacity={0.8}
              key={index}
              onPress={onPress}>
              <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>
    );
  },
);

export default ChooseImage;
