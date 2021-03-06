import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from '../../types/index';
import { deleteImage } from '../actions/deleteImage';
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
    [deleteImage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteImage.fulfilled.type]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.photos = state.photos.filter((photo) => photo.id !== payload.id);
    },
    [deleteImage.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default photoSlice.reducer;
