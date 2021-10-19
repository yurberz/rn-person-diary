import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import {HomeStackProps} from '../../../../helpers/ts-helpers/types';
import addHashtag from '../../../../helpers/function-helpers/addHashtag';
import {useAppDispatch} from '../../../../hooks/reduxHooks';
import {addEntry} from '../../../../redux/reducers/diaryReducer';
import Input from '../../../../components/textInput/Input';
import DatePickerModal from '../../../../components/datePickerModal/DatePickerModal';
import IconButton from '../../../../components/iconButton/IconButton';
import styles from './styles';
import ChooseImage from '../../../../components/chooseImage/ChooseImage';

const AddScreen = ({navigation}: HomeStackProps) => {
  const dispatch = useAppDispatch();

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

  const isFocused = useIsFocused();

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
  const sheetRef = useRef(null);

  const onChange = (value: string) => {
    const hashTagValue = addHashtag(value);

    setTags(hashTagValue);
  };

  const onFileSelected = (images: string[]) => {
    setImages(images);
  };

  return (
    <View style={styles.containerStyle}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <DatePickerModal
          open={isDateModal}
          date={date}
          onDateChange={setDate}
          onConfirm={date => {
            setIsDateModal(false);
            setDate(date);
          }}
          onCancel={() => setIsDateModal(false)}
          iconProps={{
            onPress: () => setIsDateModal(true),
            iconName: 'ios-calendar',
            iconSize: 20,
            iconColor: 'rgb(28, 28, 30)',
          }}
        />

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

        <Button
          title="OPEN BOTTOM SHEET"
          onPress={() => sheetRef.current?.open()}
        />

        <ChooseImage
          stateImages={images}
          onFileSelected={onFileSelected}
          ref={sheetRef}
        />

        <View
          style={{
            height: 150,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'salmon',
          }}>
          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingHorizontal: 5,
            }}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={{uri: image}}
                style={{
                  width: 100,
                  height: 100,
                  margin: 6,
                  borderRadius: 7,
                }}
              />
            ))}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddScreen;
