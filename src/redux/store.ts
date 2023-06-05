import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basket/basketSlice';
import filterSlice from './slices/filter/filterSlice';
import clothesSlice from './slices/data/clothesSlice';
import userSlice from './slices/auth/userSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
    clothes: clothesSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
