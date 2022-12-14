import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'http://localhost:3000/api/v1/greetings';

const initialState = [];

export const getGreeting = createAsyncThunk('greetings/getGreeting', async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers to handle loading state as needed
    builder
      .addCase(getGreeting.fulfilled, (state, action) => action.payload);
  },
});

export default greetingsSlice.reducer;
