import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import {IDiaryState} from '../../helpers/ts-helpers/interfaces';

const initialState: IDiaryState = {
  entries: [],
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addEntry: (state, {payload}) => ({
      entries: [
        ...state.entries,
        {
          id: uuidv4(),
          ...payload,
        },
      ],
    }),
    updateEntry: (state, {payload}) => ({
      entries: [
        ...state.entries.map(entry => {
          entry.id === payload.id ? (entry = {...entry, ...payload}) : entry;

          return entry;
        }),
      ],
    }),
    deleteEntry: (state, {payload}) => ({
      entries: [...state.entries.filter(entry => entry.id !== payload)],
    }),
  },
});

export default diarySlice.reducer;
export const {addEntry, updateEntry, deleteEntry} = diarySlice.actions;
