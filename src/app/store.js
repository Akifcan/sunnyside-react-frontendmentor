import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sectionReducer from '../features/sections/sectionSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sections: sectionReducer
  },
});
