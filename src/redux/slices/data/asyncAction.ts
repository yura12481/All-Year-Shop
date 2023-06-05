import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IClothes } from '../../../models';
import { FetchParams } from './types';

export const fetchClothes = createAsyncThunk(
  'clothes/fetchClothesStatus',
  async (params: FetchParams, thunkAPI) => {
    const { categoryId, page, searchValue } = params;
    const { data } = await axios.get<IClothes[]>(
      `https://63a41f0f821953d4f2aa043e.mockapi.io/items?page=${page}&limit=8&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }${searchValue ? `&search=${searchValue}` : ''}`
    );
    return data;
  }
);
