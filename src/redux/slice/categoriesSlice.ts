import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api';
import {CategoriesType} from '../../types';

interface CategoriesState {
  data: CategoriesType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: [],
  status: 'idle',
  error: null,
} as CategoriesState;

export const getCategories = createAsyncThunk('categories', async () => {
  const response = await api.getCategories();
  const updatedData: CategoriesType[] = [];

  response.parsedBody?.categories.map((item: CategoriesType) => {
    updatedData.push({
      ...item,
      isSelected: false,
    });
  });
  return updatedData as CategoriesType[];
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || [];
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const categoriesSliceReducer = categoriesSlice.reducer;
