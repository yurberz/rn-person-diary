import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Text,
  LayoutAnimation,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Audio, AVPlaybackStatus} from 'expo-av';
import moment from 'moment';
import {
  NoteScreenProps,
  TEntryModel,
  TImageModel,
} from '../../../../helpers/ts-helpers/types';
import {useAppDispatch, useAppSelector} from '../../../../hooks/reduxHooks';
import {
  updateEntry,
  deleteEntry,
} from '../../../../redux/reducers/diaryReducer';
import Input from '../../../../components/textInput/Input';
import DatePickerModal from '../../../../components/datePickerModal/DatePickerModal';
import IconButton from '../../../../components/iconButton/IconButton';
import addHashtag from '../../../../helpers/function-helpers/addHashtag';
import dateFormat from '../../../../helpers/function-helpers/dateFormat';
import ChooseImage from '../../../../components/chooseImage/ChooseImage';
import ButtonsBlock from '../../../../components/buttonsBlock/ButtonsBlock';
import ImagesBlock from '../../../../components/imagesBlock/ImagesBlock';
import {IMarkerProps} from '../../../../helpers/ts-helpers/interfaces';
import GeoTagBlock from '../../../../components/geoTagBlock/GeoTagBlock';
import AudioPlayer from '../../../../components/audioPlayer/AudioPlayer';
import {COLORS} from '../../../../constants/theme';
import styles from './styles';

const NoteScreen = ({navigation, route}: NoteScreenProps) => {
  const dispatchAction = useAppDispatch();
  const {navigate, setOptions} = navigation;
  const {entryId} = route.params;
  const {entries} = useAppSelector(state => state.personalDiary);
  const entry: TEntryModel = entries.find(entry => entry.id === entryId);
  const [id, setId] = useState(entry?.id);
  const [title, setTitle] = useState(entry?.title);
  const [description, setDescription] = useState(entry?.description);
  const [tags, setTags] = useState(entry?.tags.join(' '));
  const [date, setDate] = useState(moment(entry?.date).toDate());
  const [images, setImages] = useState<TImageModel[]>(entry?.images);
  const [recording, setRecording] = useState(entry?.audio);
  const [sound, setSound] = useState<Audio.Sound>();
  const [geoTag, setGeoTag] = useState<IMarkerProps | undefined>(entry?.marker);
  const [isDateModal, setIsDateModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);

  const tagsArr = tags.split(' ');

  const handleSubmit = () => {
    dispatchAction(
      updateEntry({
        id,
        date,
        title,
        description,
        tags: tags.length > 2 ? tagsArr : [],
        images,
        marker: geoTag,
        audio: recording,
      }),
    );
  };

  const removeEntry = () => {
    dispatchAction(deleteEntry(id));
    navigate('DefaultHomeScreen');
  };

  useEffect(() => {
    setOptions({
      headerRightContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingEnd: 10,
      },
      headerRight: () => {
        return !isInEditMode ? (
          <>
            <IconButton
              onPress={removeEntry}
              iconName="trash-sharp"
              iconSize={30}
              iconColor={COLORS.redColor}
            />
            <IconButton
              onPress={() => {
                editModeOn();
                setDate(new Date());
              }}
              iconName="pencil-sharp"
              iconSize={30}
              iconColor={COLORS.blackColor}
            />
          </>
        ) : (
          <IconButton
            onPress={() => {
              handleSubmit();
              editModeOff();
            }}
            iconName="checkmark-sharp"
            iconSize={30}
            iconColor={COLORS.greenColor}
          />
        );
      },
    });
  }, [navigation, isInEditMode, removeEntry, handleSubmit]);

  useEffect(() => {
    if (route.params?.uri !== undefined) {
      setRecording(route.params?.uri);
    }
  }, [route.params?.uri]);

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

  const editModeOn = () => {
    setIsInEditMode(true);
  };

  const editModeOff = () => {
    setIsInEditMode(false);
  };

  const onChange = (value: string) => {
    const hashTagValue = addHashtag(value);

    setTags(hashTagValue);
  };

  const onFileSelected = (images: TImageModel[]) => {
    setImages(images);
  };

  const showImage = (_: any, url: string) => {
    navigate('FullImageScreen', {
      image: url,
    });
  };
  const removeImage = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    setImages(prev => prev.filter(image => image.id !== id));
  };

  const refSecondInput = useRef<TextInput>(null);
  const sheetRef = useRef<RBSheet>(null);

  const removeGeoTag = () => {
    setGeoTag(undefined);
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
          onSubmitEditing={() => refSecondInput.current?.focus()}
          value={title}
          onChange={value => setTitle(value)}
          isEditable={isInEditMode}
        />
        {Platform.OS === 'ios' && (
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
            isEditable={isInEditMode}
            numberOfLines={20}
          />
        )}
        {Platform.OS === 'android' && isInEditMode ? (
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
            numberOfLines={20}
          />
        ) : null}
        {Platform.OS === 'android' && !isInEditMode ? (
          <ScrollView style={styles.androidContainerStyle}>
            <Text style={styles.androidTextStyle}>{description}</Text>
          </ScrollView>
        ) : null}
        <Input
          inputContainerStyle={styles.thirdInputContainerStyle}
          inputStyle={styles.thirdInputStyles}
          autoCapitalize={'none'}
          placeholder="tags"
          maxLength={200}
          blurOnSubmit={true}
          returnKeyType="done"
          value={tags}
          onChange={onChange}
          isEditable={isInEditMode}
        />

        {recording ? (
          <AudioPlayer
            isPlaying={isPlaying}
            playSound={playSound}
            setRecording={setRecording}
            isEditable={isInEditMode}
          />
        ) : null}

        {geoTag && (
          <GeoTagBlock
            isEditable={isInEditMode}
            marker={geoTag}
            onPress={removeGeoTag}
          />
        )}

        {images.length > 0 ? (
          <ImagesBlock
            images={images}
            onPress={isInEditMode ? removeImage : showImage}
            iconName={isInEditMode ? 'ios-close-outline' : 'ios-expand'}
            iconSize={30}
            iconColor="white"
            iconStyle={styles.iconStyle}
            editable={isInEditMode}
          />
        ) : null}

        {isInEditMode && (
          <ButtonsBlock
            buttonsContainerStyle={styles.buttonContainerStyle}
            calendarButton={() => setIsDateModal(true)}
            imageButton={() => sheetRef.current!.open()}
            geoTagButton={() => {}}
            recordButton={() =>
              navigate('AudioRecorderScreen', {
                prevScreen: 'NoteScreen',
              })
            }
            iconeSize={30}
            isEditable={isInEditMode}
          />
        )}

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

export default NoteScreen;
