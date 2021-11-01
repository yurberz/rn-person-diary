import {combineReducers} from '@reduxjs/toolkit';

import diaryReducer from './diaryReducer';

const rootReducer = combineReducers({
  personalDiary: diaryReducer,
});

export default rootReducer;
