import { IClothes } from '../../../models';

export type FetchParams = {
  page: number;
  categoryId: number;
  searchValue: string | null;
};

export interface IItemsSliceState {
  data: IClothes[];
  status: string;
}
