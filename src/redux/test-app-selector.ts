import {mealsSliceReducer} from './slice';
const state = {
  meals: mealsSliceReducer,
};

export const testAppSelector = (f: any) => f(state);
