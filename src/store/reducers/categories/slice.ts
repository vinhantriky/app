import {
  SliceCaseReducers,
  SliceSelectors,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import {CategoryPayload} from '#/types/categories';

import {getAllCategories} from '#/services';

export const getAllCategoriesThunk = createAsyncThunk(
  'auth/getAllCategories',
  async (_, thunkAPI) => {
    try {
      const response = await getAllCategories();
      if (response) {
        return response;
      }
      return undefined;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

type StatePayload = {
  categories: CategoryPayload[] | undefined;
  loading: boolean;
  error: string | undefined;
};

const slice = createSlice<
  StatePayload,
  SliceCaseReducers<StatePayload>,
  'category',
  SliceSelectors<StatePayload>,
  'category'
>({
  name: 'category',
  initialState: {
    categories: undefined,
    error: undefined,
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllCategoriesThunk.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
      state.loading = false;

      console.log('CATE', action.payload);
      state.categories = action.payload;
    });
    builder.addCase(getAllCategoriesThunk.rejected, (state, action) => {
      state.loading = false;
      console.log('j v ', action.payload);
      state.error = (action.payload as Error).message;
    });
  },
});

export const categoryReducer = slice.reducer;
