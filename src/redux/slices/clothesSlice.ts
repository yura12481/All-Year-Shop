import axios from 'axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IClothes } from '../../models';

interface IItemsSliceState {
  data: IClothes[];
  status: string;
}

type FetchParams = {
  page: number;
  categoryId: number;
  searchValue: string | null;
};

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

const initialState: IItemsSliceState = {
  data: [],
  status: '',
};

const clothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IClothes[]>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClothes.pending, (state) => {
      state.status = 'loading';
      state.data = [];
    });
    builder.addCase(fetchClothes.fulfilled, (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(fetchClothes.rejected, (state) => {
      state.status = 'error';
      state.data = [];
    });
  },
});

export const { setItems } = clothesSlice.actions;
export default clothesSlice.reducer;
