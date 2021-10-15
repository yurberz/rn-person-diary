import React, {useState, useRef} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {addEntry} from '../redux/reducers/diaryReducer';
import {diary} from '../redux/selectors/diarySelector';
import Input from '../components/textInput/Input';
import SearchInput from '../components/searchInput/SearchInput';
import FilterBar from '../components/filterBar/FilterBar';
import CustomSwitcher from '../components/customSwitcher/CustomSwitcher';
import CustomRadioButton from '../components/customRadioButton/CustomRadioButton';

const TestScreen = () => {
  const dispatch = useAppDispatch();
  const entries = useAppSelector(diary);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState('');
  const [filterBy, setFilterBy] = useState('tag');
  const [inDateSort, setInDateSort] = useState(false);

  const refSecondInput = useRef<TextInput>();
  const refThirdInput = useRef<TextInput>();

  const testOnPress = () => {
    dispatch(
      addEntry({
        title,
        description,
        tags,
        date,
      }),
    );
  };

  const addHashTag = (value: string) => {
    value = value.replace(/[^\w ]/g, '').replace(/(\w+)/gi, '#' + '$1');

    setTags(value);
  };

  const renderItem = () => {
    return entries?.map((entry: any, index: number) => {
      const {title, description, tags, date} = entry;

      const formattedDateTime = moment(date).format('DD-MM-YYYY hh:mm');

      return (
        <View key={index}>
          <Text style={{textAlign: 'center'}} key={entry.id}>
            GLOBAL STORE:
          </Text>
          <Text key={title}>{title}</Text>
          <Text key={description}>{description}</Text>
          <Text key={tags}>{tags}</Text>
          <Text key={date}>{formattedDateTime}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Hello PersonalDiary RN-App</Text>
        {renderItem()}

        <CustomRadioButton
          label="sort by date"
          onPress={() => setInDateSort(!inDateSort)}
          isSelected={inDateSort}
          iconSize={25}
        />

        <CustomSwitcher
          label="sort by date"
          onPress={() => setInDateSort(!inDateSort)}
          isSelected={inDateSort}
          iconSize={50}
        />

        <Input
          inputContainerStyle={styles.firstInputContainerStyle}
          placeholder="Title: maximum  200 number of characters"
          maxLength={200}
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => refSecondInput?.current?.focus()}
          value={title}
          onChange={value => setTitle(value)}
        />
        <Input
          inputContainerStyle={styles.secondInputContainerStyle}
          inputStyle={styles.secondInputStyles}
          placeholder="Description: maximum 2000 number of characters"
          maxLength={2000}
          blurOnSubmit={true}
          multiline={true}
          returnKeyType="next"
          onSubmitEditing={() => refThirdInput?.current?.focus()}
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
          ref={refThirdInput}
          value={tags}
          onChange={addHashTag}
        />

        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="datetime"
          minimumDate={new Date('2021-01-01')}
          maximumDate={new Date('2023-06-01')}
        />

        <Button title="Test" onPress={testOnPress} />

        <SearchInput
          placeholder="search"
          value={inputValue}
          onChange={value => setInputValue(value)}
          appendComponent={
            <>
              <FilterBar
                data={[
                  {id: '1', title: 'tag'},
                  {id: '2', title: 'notes'},
                ]}
                onValueChange={value => setFilterBy(value)}
              />

              <CustomSwitcher
                label="sort by date"
                onPress={() => setInDateSort(!inDateSort)}
                isSelected={inDateSort}
                iconSize={30}
              />
            </>
          }
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  firstInputContainerStyle: {
    marginTop: 30,
  },
  secondInputContainerStyle: {
    marginTop: 15,
  },
  thirdInputContainerStyle: {},
  secondInputStyles: {
    height: 150,
    paddingVertical: 5,
    textAlignVertical: 'top',
    borderBottomWidth: 0,
  },
  thirdInputStyles: {
    borderBottomWidth: 0,
  },
});

export default TestScreen;
