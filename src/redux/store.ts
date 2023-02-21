import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import filterSlice from './slices/filterSlice';
import clothesSlice from './slices/clothesSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
    clothes: clothesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
