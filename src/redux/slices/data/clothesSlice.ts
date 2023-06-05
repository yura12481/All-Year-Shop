import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IClothes } from '../../../models';
import { fetchClothes } from './asyncAction';
import { IItemsSliceState } from './types';

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
