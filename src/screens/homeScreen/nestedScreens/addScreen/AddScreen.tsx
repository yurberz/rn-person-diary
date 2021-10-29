import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useIsFocused} from '@react-navigation/core';
import {Audio, AVPlaybackStatus} from 'expo-av';
import {
  AddScreenProps,
  TImageModel,
} from '../../../../helpers/ts-helpers/types';
import addHashtag from '../../../../helpers/function-helpers/addHashtag';
import dateFormat from '../../../../helpers/function-helpers/dateFormat';
import {useAppDispatch} from '../../../../hooks/reduxHooks';
import {addEntry} from '../../../../redux/reducers/diaryReducer';
import IconButton from '../../../../components/iconButton/IconButton';
import Input from '../../../../components/textInput/Input';
import DatePickerModal from '../../../../components/datePickerModal/DatePickerModal';
import ChooseImage from '../../../../components/chooseImage/ChooseImage';
import ButtonsBlock from '../../../../components/buttonsBlock/ButtonsBlock';
import ImagesBlock from '../../../../components/imagesBlock/ImagesBlock';
import AudioPlayer from '../../../../components/audioPlayer/AudioPlayer';
import styles from './styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AddScreen = ({navigation, route}: AddScreenProps) => {
  const dispatchAction = useAppDispatch();
  const isFocused = useIsFocused();
  const {navigate, setOptions, addListener, dispatch} = navigation;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [date, setDate] = useState(new Date());
  const [images, setImages] = useState<TImageModel[]>([]);
  const [recording, setRecording] = useState('');
  const [sound, setSound] = useState<Audio.Sound>();
  const [isDateModal, setIsDateModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  let isAddAction: boolean = false;

  const tagsArr = tags.split(' ');

  const handleSubmit = () => {
    isAddAction = true;

    if (title || description) {
      dispatchAction(
        addEntry({
          date,
          title,
          description,
          tags: tags.length > 2 ? tagsArr : [],
          images,
          audio: recording,
        }),
      );
    }

    navigate('DefaultHomeScreen');
  };

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <IconButton
          onPress={handleSubmit}
          iconName="checkmark-sharp"
          iconSize={30}
          iconColor="rgb(48, 209, 88)"
        />
      ),
    });
  }, [navigation, handleSubmit]);

  useEffect(() => {
    setRecording(route.params?.uri);
  }, [route.params?.uri]);

  // useEffect(() => {
  //   setTitle('');
  //   setDescription('');
  //   setTags('');
  //   setDate(new Date());
  //   setImages([]);
  //   isAddAction = false;
  // }, [isFocused]);

  const hasUnsavedChanges = () => {
    return title !== '' || description !== '';
  };

  useEffect(
    () =>
      addListener(
        'beforeRemove',
        (evt: {preventDefault: () => void; data: {action: any}}) => {
          if (!hasUnsavedChanges() || isAddAction) {
            return;
          }

          evt.preventDefault();

          Alert.alert(
            'Discard changes?',
            'You have unsaved changes. Are you sure to discard them and leave the screen?',
            [
              {
                text: "Don't leave",
                style: 'cancel',
                onPress: () => {},
              },
              {
                text: 'Discard',
                style: 'destructive',
                onPress: () => dispatch(evt.data.action),
              },
            ],
          );
        },
      ),
    [navigation, hasUnsavedChanges],
  );

  const refSecondInput = useRef<TextInput>(null);
  const sheetRef = useRef<RBSheet>(null);

  const onChange = (value: string) => {
    const hashTagValue = addHashtag(value);
    setTags(hashTagValue);
  };

  const onFileSelected = (images: TImageModel[]) => {
    setImages(images);
  };

  const removeImage = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setImages(prev => prev.filter(image => image.id !== id));
  };

  const playSound = async () => {
    const onPlaybackStatusUpdate = (playbackStatus: AVPlaybackStatus) => {
      playbackStatus.isPlaying ? setIsPlaying(true) : setIsPlaying(false);
    };

    const {sound} = await Audio.Sound.createAsync(
      {uri: recording},
      {},
      onPlaybackStatusUpdate,
    );

    setSound(sound);
    await sound.playAsync();
  };

  const formattedDateTime = dateFormat(date);

  return (
    <View style={styles.containerStyle}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.headerStyle}>
          <View style={styles.leftSideStyle}>
            <Text style={styles.dateTextStyle}>{formattedDateTime}</Text>
          </View>
        </View>

        <Input
          inputContainerStyle={styles.firstInputContainerStyle}
          inputStyle={styles.firstInputStyles}
          placeholder="Title*"
          maxLength={200}
          returnKeyType="next"
          onSubmitEditing={() => refSecondInput.current!.focus()}
          value={title}
          onChange={value => setTitle(value)}
          isEditable={true}
        />
        <Input
          inputContainerStyle={styles.secondInputContainerStyle}
          inputStyle={styles.secondInputStyles}
          placeholder="Description*"
          maxLength={2000}
          multiline={true}
          returnKeyType="done"
          ref={refSecondInput}
          value={description}
          onChange={value => setDescription(value)}
          isEditable={true}
        />
        <Input
          inputContainerStyle={styles.thirdInputContainerStyle}
          inputStyle={styles.thirdInputStyles}
          placeholder="tags"
          maxLength={200}
          blurOnSubmit={true}
          returnKeyType="done"
          value={tags}
          onChange={onChange}
          isEditable={true}
        />

        {recording ? (
          <AudioPlayer
            isPlaying={isPlaying}
            playSound={playSound}
            setRecording={setRecording}
          />
        ) : null}

        {images.length > 0 ? (
          <ImagesBlock
            images={images}
            onPress={removeImage}
            iconName="ios-close-outline"
            iconSize={30}
            iconColor="#ffffff"
            iconStyle={styles.iconStyle}
            editable={true}
          />
        ) : null}

        <ButtonsBlock
          buttonsContainerStyle={styles.buttonContainerStyle}
          calendarButton={() => setIsDateModal(true)}
          imageButton={() => sheetRef.current!.open()}
          recordButton={() =>
            navigate('AudioRecorderScreen', {prevScreen: 'AddScreen'})
          }
          iconeSize={30}
        />

        <DatePickerModal
          open={isDateModal}
          date={date}
          onDateChange={setDate}
          onConfirm={date => {
            setIsDateModal(false);
            setDate(date);
          }}
          onCancel={() => setIsDateModal(false)}
        />

        <ChooseImage
          stateImages={images}
          onFileSelected={onFileSelected}
          closeSheet={() => sheetRef.current!.close()}
          ref={sheetRef}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddScreen;
