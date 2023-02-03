import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Category = {
  categoryId: number;
};

const initialState: Category = {
  categoryId: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
