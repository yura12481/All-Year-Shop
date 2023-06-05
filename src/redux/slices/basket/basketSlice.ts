import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';
import { getBasketFromLS } from '../../../utils/getBasketFromLS';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';
import { BasketItem, IBasketSliceState } from './types';

const { items, totalPrice } = getBasketFromLS();

const initialState: IBasketSliceState = {
  totalPrice: totalPrice,
  items: items,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<BasketItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, randomId: uuidv4(), count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    plusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.randomId === action.payload
      );

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.randomId === action.payload
      );

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    removeItem(state, action: PayloadAction<string>) {
      const removedItem = state.items.find(
        (item) => item.randomId === action.payload
      );

      if (removedItem) {
        state.totalPrice -= removedItem.price * removedItem.count;
      }

      state.items = state.items.filter(
        (item) => item.randomId !== action.payload
      );
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, plusItem, minusItem } =
  basketSlice.actions;
export default basketSlice.reducer;
