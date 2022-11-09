import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CategoriesType} from '../../types';

interface CartsState {
  data: CategoriesType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: [],
  status: 'idle',
  error: null,
} as CartsState;

export const addToCart = createAsyncThunk(
  'carts',
  async (payload: CategoriesType[]) => {
    return payload as CategoriesType[];
  },
);

const addToCartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addToCart.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || [];
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const addToCartSliceReducer = addToCartSlice.reducer;
