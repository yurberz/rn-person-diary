import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Text,
  LayoutAnimation,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {HomeStackProps, TImageModel} from '../../../../helpers/ts-helpers/types';
import {useAppDispatch} from '../../../../hooks/reduxHooks';
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
import moment from 'moment';
import styles from './styles';

const NoteScreen = ({navigation, route}: HomeStackProps) => {
  const {note} = route.params;

  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [tags, setTags] = useState(note.tags.join(' '));
  const [date, setDate] = useState(moment(note.date).toDate());
  const [images, setImages] = useState<TImageModel[]>(note.images);
  const [isDateModal, setIsDateModal] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const dispatch = useAppDispatch();

  const tagsArr = tags.split(' ');

  const handleSubmit = () => {
    dispatch(
      updateEntry({
        id: note.id,
        date,
        title,
        description,
        tags: tags.length > 2 ? tagsArr : [],
      }),
    );
  };

  const removeEntry = () => {
    dispatch(deleteEntry(note.id));
    navigation.navigate('DefaultHomeScreen');
  };

  const editModeOn = () => {
    setIsInEditMode(true);
  };

  const editModeOff = () => {
    setIsInEditMode(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        right: 15,
      },
      headerRight: () => {
        return !isInEditMode ? (
          <>
            <IconButton
              onPress={removeEntry}
              iconName="trash-sharp"
              iconSize={30}
              iconColor="rgb(255,69,68)"
            />
            <IconButton
              onPress={() => {
                editModeOn();
                setDate(new Date());
              }}
              iconName="pencil-sharp"
              iconSize={30}
              iconColor="black"
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
            iconColor="rgb(48, 209, 88)"
          />
        );
      },
    });
  }, [navigation, isInEditMode, removeEntry]);

  const refFirstInput = useRef<TextInput>(null);
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

  const showImage = (_: any, url: string) => {
    navigation.navigate('FullImageScreen', {
      image: url,
    });
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
          ref={refFirstInput}
          onSubmitEditing={() => refSecondInput.current?.focus()}
          value={title}
          onChange={value => setTitle(value)}
          isEditable={isInEditMode}
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
          isEditable={isInEditMode}
          numberOfLines={20}
        />
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
        {images.length > 0 ? (
          <ImagesBlock
            images={images}
            onPress={isInEditMode ?  removeImage : showImage}
            iconName={isInEditMode ? "ios-close-outline" : "ios-expand"}
            iconSize={30}
            iconColor="white"
            iconStyle={styles.iconStyle}
            editable={isInEditMode}
          />
        ) : null}
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
        {isInEditMode && (
          <ButtonsBlock
            buttonsContainerStyle={styles.buttonContainerStyle}
            calendarButton={() => setIsDateModal(true)}
            imageButton={() => sheetRef.current!.open()}
            recordButton={() => {}}
            iconeSize={30}
          />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default NoteScreen;
