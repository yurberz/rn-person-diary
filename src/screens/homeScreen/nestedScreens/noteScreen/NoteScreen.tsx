import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import {HomeStackProps} from '../../../../helpers/ts-helpers/types';
import {useAppDispatch} from '../../../../hooks/reduxHooks';
import {
  updateEntry,
  deleteEntry,
} from '../../../../redux/reducers/diaryReducer';
import Input from '../../../../components/textInput/Input';
import DatePickerModal from '../../../../components/datePickerModal/DatePickerModal';
import IconButton from '../../../../components/iconButton/IconButton';
import addHashtag from '../../../../helpers/function-helpers/addHashtag';
import moment from 'moment';
import styles from './styles';

const NoteScreen = ({navigation, route}: HomeStackProps) => {
  const entry = route.params.note;

  const [title, setTitle] = useState(entry.title);
  const [description, setDescription] = useState(entry.description);
  const [tags, setTags] = useState(entry.tags.join(' '));
  const [date, setDate] = useState(moment(entry.date).toDate());
  const [isDateModal, setIsDateModal] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const dispatch = useAppDispatch();

  const tagsArr = tags.split(' ');

  const handleSubmit = () => {
    dispatch(
      updateEntry({
        id: entry.id,
        date,
        title,
        description,
        tags: tags.length > 2 ? tagsArr : [],
      }),
    );
  };

  const removeEntry = () => {
    dispatch(deleteEntry(entry.id));
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
              onPress={() => editModeOn()}
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

  const refFirstInput = useRef<TextInput>();
  const refSecondInput = useRef<TextInput>();

  const onChange = (value: string) => {
    const hashTagValue = addHashtag(value);

    setTags(hashTagValue);
  };

  return (
    <ScrollView>
      <View style={styles.containerStyle}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {isInEditMode ? (
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
          ) : (
            <DatePickerModal date={date} />
          )}
          <Input
            disabled={true}
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
            placeholder="tags"
            maxLength={200}
            blurOnSubmit={true}
            returnKeyType="done"
            value={tags}
            onChange={onChange}
            isEditable={isInEditMode}
          />
          {/* <Button title={'test'} onPress={() => console.log(isInEditMode)} /> */}
          {isInEditMode && (
            <View style={styles.featuresBarStyles}>
              <IconButton
                onPress={() => setIsDateModal(true)}
                iconName="ios-calendar"
                iconSize={30}
                iconColor="rgb(28, 28, 30)"
              />
              <IconButton
                onPress={() => console.log('a')}
                iconName="images"
                iconSize={30}
                iconColor="rgb(28, 28, 30)"
              />
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default NoteScreen;
