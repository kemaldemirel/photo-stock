import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { IPhoto } from '../../types/index';

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get<IPhoto[]>(
        'http://jsonplaceholder.typicode.com/photos?_page=1&limit=10',
      );
      return res.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  },
);
