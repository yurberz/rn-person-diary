import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useIsFocused} from '@react-navigation/core';
import {HomeStackProps} from '../../../../helpers/ts-helpers/types';
import addHashtag from '../../../../helpers/function-helpers/addHashtag';
import dateFormat from '../../../../helpers/function-helpers/dateFormat';
import {useAppDispatch} from '../../../../hooks/reduxHooks';
import {addEntry} from '../../../../redux/reducers/diaryReducer';
import IconButton from '../../../../components/iconButton/IconButton';
import Input from '../../../../components/textInput/Input';
import DatePickerModal from '../../../../components/datePickerModal/DatePickerModal';
import ChooseImage from '../../../../components/chooseImage/ChooseImage';
import ImagesContainer from '../../../../components/imagesContainer/ImagesContainer';
import BlockButtons from '../../../../components/blockButtons/BlockButtons';
import styles from './styles';

const AddScreen = ({navigation}: HomeStackProps) => {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [date, setDate] = useState(new Date());
  const [images, setImages] = useState<string[]>([]);
  const [isDateModal, setIsDateModal] = useState(false);
  let isAddAction: boolean = false;

  const tagsArr = tags.split(' ');

  const handleSubmit = () => {
    isAddAction = true;

    if (title || description) {
      dispatch(
        addEntry({
          date,
          title,
          description,
          tags: tags.length > 2 ? tagsArr : [],
          images,
        }),
      );
    }

    navigation.navigate('DefaultHomeScreen');
  };

  useEffect(() => {
    navigation.setOptions({
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
    setTitle('');
    setDescription('');
    setTags('');
    setDate(new Date());
    isAddAction = false;
  }, [isFocused]);

  const hasUnsavedChanges = () => {
    return title !== '' || description !== '';
  };

  useEffect(
    () =>
      navigation.addListener(
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
                onPress: () => navigation.dispatch(evt.data.action),
              },
            ],
          );
        },
      ),
    [navigation, hasUnsavedChanges],
  );

  const refFirstInput = useRef<TextInput>(null);
  const refSecondInput = useRef<TextInput>(null);
  const sheetRef = useRef<RBSheet>(null);

  const onChange = (value: string) => {
    const hashTagValue = addHashtag(value);

    setTags(hashTagValue);
  };

  const onFileSelected = (images: string[]) => {
    setImages(images);
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

          <View style={styles.rightSideStyle}>
            <BlockButtons
              buttonsContainerStyle={styles.headerButtonsContainerStyle}
              calendarButton={() => setIsDateModal(true)}
              imageButton={() => sheetRef.current!.open()}
              recordButton={() => {}}
              iconeSize={20}
            />
          </View>
        </View>

        <Input
          inputContainerStyle={styles.firstInputContainerStyle}
          inputStyle={styles.firstInputStyles}
          placeholder="Title*"
          maxLength={200}
          returnKeyType="next"
          ref={refFirstInput}
          onSubmitEditing={() => refSecondInput.current!.focus()}
          value={title}
          onChange={value => setTitle(value)}
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
        />

        {images.length > 0 ? <ImagesContainer images={images} /> : null}

        <BlockButtons
          buttonsContainerStyle={styles.buttonContainerStyle}
          calendarButton={() => setIsDateModal(true)}
          imageButton={() => sheetRef.current!.open()}
          recordButton={() => {}}
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
