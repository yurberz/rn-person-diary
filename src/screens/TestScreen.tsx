import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Input from '../components/textInput/Input';
import SearchInput from '../components/searchInput/SearchInput';
import FilterBar from '../components/filterBar/FilterBar';
import CustomSwitcher from '../components/customSwitcher/CustomSwitcher';
import CustomCheckbox from '../components/customCheckbox/CustomCheckbox';

const TestScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [filterBy, setFilterBy] = useState('tag');
  const [inDateSort, setInDateSort] = useState(false);

  const refSecondInput = useRef<TextInput>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello PersonDiary RN-App</Text>

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
