import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from '../../types/index';
import { fetchPhotos } from '../actions/fetchPhotos';

const initialState: IState = {
  photos: [],
  isLoading: false,
  error: '',
};

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPhotos.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPhotos.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.photos.push(...payload);
    },
    [fetchPhotos.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default photoSlice.reducer;
