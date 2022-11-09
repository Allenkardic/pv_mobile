import {
  mealsSliceReducer,
  categoriesSliceReducer,
  addToCartSliceReducer,
} from './slice';
const state = {
  meals: mealsSliceReducer,
  categories: categoriesSliceReducer,
  carts: addToCartSliceReducer,
};

export const testAppSelector = (f: any) => f(state);
