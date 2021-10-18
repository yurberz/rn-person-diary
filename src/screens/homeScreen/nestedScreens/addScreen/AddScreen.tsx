import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import DatePicker from 'react-native-date-picker';
import {HomeStackProps} from '../../../../helpers/ts-helpers/types';
import addHashtag from '../../../../helpers/function-helpers/addHashtag';
import {useAppDispatch} from '../../../../hooks/reduxHooks';
import {addEntry} from '../../../../redux/reducers/diaryReducer';
import Input from '../../../../components/textInput/Input';
import DatePickerModal from '../../../../components/datePickerModal/DatePickerModal';
import IconButton from '../../../../components/iconButton/IconButton';
import styles from './styles';

const AddScreen = ({navigation}: HomeStackProps) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDateModal, setIsDateModal] = useState(false);
  const tagsArr = tags.split(' ');

  const handleSubmit = () => {
    if (title || description) {
      dispatch(
        addEntry({
          title,
          description,
          tags: tagsArr.length > 2 ? tagsArr : [],
          date,
        }),
      );
    }

    navigation.navigate('DefaultHomeScreen');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={() => handleSubmit()}
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

    // refFirstInput.current?.focus();
  }, [isFocused]);

  // const hasUnsavedChanges = () => {
  //   return title !== '' || description !== '' || tags !== '';
  // };
  const hasUnsavedChanges = Boolean(title);

  useEffect(
    () =>
      navigation.addListener(
        'beforeRemove',
        (evt: {preventDefault: () => void; data: {action: any}}) => {
          if (!hasUnsavedChanges) {
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

  const refFirstInput = useRef<TextInput>();
  const refSecondInput = useRef<TextInput>();

  const onChange = (value: string) => {
    const hashTagValue = addHashtag(value);

    setTags(hashTagValue);
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

        {/* <IconButton
          onPress={() => setIsDateModal(true)}
          iconName="ios-calendar"
          iconSize={30}
          iconColor="rgb(28, 28, 30)"
        />

        <DatePicker
          modal
          open={isDateModal}
          date={date}
          onConfirm={date => {
            setIsDateModal(false);
            setDate(date);
          }}
          onCancel={() => setIsDateModal(false)}
          onDateChange={setDate}
          mode="datetime"
          minimumDate={new Date('2021-01-01')}
          maximumDate={new Date('2023-06-01')}
        /> */}
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddScreen;
