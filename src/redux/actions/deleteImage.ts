import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPhoto } from '../../types/index';

export const deleteImage = createAsyncThunk(
  'photos/deleteImage',
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await axios.delete<IPhoto[]>(`http://jsonplaceholder.typicode.com/photos/${id}`);
      return res.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  },
);
