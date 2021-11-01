import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import {IDiaryState} from '../../helpers/ts-helpers/interfaces';

const initialState: IDiaryState = {
  entries: [],
  isSecurity: false,
  isPinLockScreen: false,
  isDarkTheme: false,
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addEntry: (state, {payload}) => ({
      ...state,
      entries: [
        ...state.entries,
        {
          id: uuidv4(),
          ...payload,
        },
      ],
    }),
    updateEntry: (state, {payload}) => ({
      ...state,
      entries: [
        ...state.entries.map(entry => {
          entry.id === payload.id ? (entry = {...entry, ...payload}) : entry;

          return entry;
        }),
      ],
    }),
    deleteEntry: (state, {payload}) => ({
      ...state,
      entries: [...state.entries.filter(entry => entry.id !== payload)],
    }),
    toggleOnOffSecurity: state => ({
      ...state,
      isSecurity: !state.isSecurity,
    }),
    showPinLockScreen: state => ({
      ...state,
      isPinLockScreen: !state.isPinLockScreen,
    }),
    toggleOnOffDarkTheme: state => ({
      ...state,
      isDarkTheme: !state.isDarkTheme,
    }),
  },
});

export default diarySlice.reducer;
export const {
  addEntry,
  updateEntry,
  deleteEntry,
  toggleOnOffSecurity,
  showPinLockScreen,
  toggleOnOffDarkTheme,
} = diarySlice.actions;
