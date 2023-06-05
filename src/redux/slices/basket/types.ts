export type BasketItem = {
  id?: number | undefined;
  img: string;
  name: string;
  price: number;
  count: number;
  randomId: string;
};

export interface IBasketSliceState {
  totalPrice: number;
  items: BasketItem[];
}
