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
import CustomCheckbox from '../components/customCheckbox/CustomCheckbox';

const TestScreen = () => {
  const dispatch = useAppDispatch();
  const entries = useAppSelector(diary);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [filterBy, setFilterBy] = useState('tag');
  const [inDateSort, setInDateSort] = useState(false);
  const [date, setDate] = useState(new Date());

  const formattedDateTime = moment(date).format('DD-MM-YYYY hh:mm');

  const refSecondInput = useRef<TextInput>();

  const testOnPress = () => {
    dispatch(
      addEntry({
        date,
      }),
    );
  };
  const renderItem = () => {
    return entries?.map((entry: any, index: number) => {
      const formattedDateTime = moment(entry.date).format('DD-MM-YYYY hh:mm');

      return (
        <Text style={{textAlign: 'center'}} key={entry.id}>
          GLOBAL STORE: {index}: {formattedDateTime}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Hello PersonalDiary RN-App</Text>

        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="datetime"
          minimumDate={new Date('2021-01-01')}
          maximumDate={new Date('2023-06-01')}
        />

        <Button title="Test" onPress={testOnPress} />

        <Text style={{textAlign: 'center'}}>
          LOCAL STATE:{formattedDateTime}
        </Text>

        {renderItem()}

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
          inputStyle={styles.inputStyles}
          placeholder="Description: maximum 2000 number of characters"
          maxLength={2000}
          multiline={true}
          blurOnSubmit={true}
          returnKeyType="done"
          ref={refSecondInput}
          value={description}
          onChange={value => setDescription(value)}
        />

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
                text="sort by date"
                value={inDateSort}
                onChange={value => setInDateSort(value)}
              />
            </>
          }
        />

        <CustomCheckbox
          text="sort by date"
          value={inDateSort}
          onChange={value => setInDateSort(value)}
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
  inputStyles: {
    height: 150,
    paddingVertical: 5,
    textAlignVertical: 'top',
    borderBottomWidth: 0,
  },
});

export default TestScreen;
