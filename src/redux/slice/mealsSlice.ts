import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api';
import {MealsType} from '../../types';

interface MealsState {
  data: MealsType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: [],
  status: 'idle',
  error: null,
} as MealsState;

export const getMeals = createAsyncThunk('meals', async (payload: string) => {
  const response = await api.getMeals(payload);
  const updatedData: MealsType[] = [];

  response.parsedBody?.meals.map((item: MealsType) => {
    updatedData.push({
      ...item,
      isSelected: false,
    });
  });

  return updatedData as MealsType[];
});

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    reset: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder.addCase(getMeals.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(getMeals.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = state.data.concat(action.payload);
    });
    builder.addCase(getMeals.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const resetMeals = mealsSlice.actions.reset;
export const mealsSliceReducer = mealsSlice.reducer;
