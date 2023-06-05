import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from './types';

const initialState: Category = {
  categoryId: 0,
  page: 1,
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setPage, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
