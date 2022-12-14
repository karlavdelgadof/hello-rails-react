import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './Greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
