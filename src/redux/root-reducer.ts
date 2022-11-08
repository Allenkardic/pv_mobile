import {combineReducers} from '@reduxjs/toolkit';
import {mealsSliceReducer, categoriesSliceReducer} from './slice';

const rootReducer = combineReducers({
  meals: mealsSliceReducer,
  categories: categoriesSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
