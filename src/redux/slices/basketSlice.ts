import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type BasketItem = {
  id?: number | undefined;
  img: string;
  name: string;
  price: number;
  count: number;
  randomId: string;
};

interface IBasketSliceState {
  totalPrice: number;
  items: BasketItem[];
}

const initialState: IBasketSliceState = {
  totalPrice: 0,
  items: [],
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

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    plusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.randomId === action.payload
      );
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.randomId === action.payload
      );

      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
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
