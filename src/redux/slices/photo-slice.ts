import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from '../types';

const initialState: IState = {
  photos: [],
  isLoading: false,
  error: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
});

export default photoSlice.reducer;
