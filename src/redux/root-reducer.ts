import {combineReducers} from '@reduxjs/toolkit';
import {
  mealsSliceReducer,
  categoriesSliceReducer,
  addToCartSliceReducer,
} from './slice';

const rootReducer = combineReducers({
  meals: mealsSliceReducer,
  categories: categoriesSliceReducer,
  carts: addToCartSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
