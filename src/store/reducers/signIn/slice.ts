import {
  SliceCaseReducers,
  SliceSelectors,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import {SignInRequestPayload} from '#/types/signIn';
import {UserPayload} from '#/types/user';

import {storeAccessToken, storeRefreshToken} from '#/utils';

import {getAllCategories, signIn} from '#/services';

import {getAllCategoriesThunk} from '../categories';

export const signInUserThunk = createAsyncThunk(
  'signIn/signInUser',
  async (params: SignInRequestPayload, thunkAPI) => {
    try {
      const response = await signIn(params);
      if (response?.accessToken && response?.refreshToken) {
        await storeAccessToken(response.accessToken);
        await storeRefreshToken(response.refreshToken);
        thunkAPI.dispatch(getAllCategoriesThunk());
        return response.user;
      }
      return undefined;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

type InitStatePayload = {
  user: UserPayload | undefined;
  loading: boolean;
  error: string | undefined;
};

const slice = createSlice<
  InitStatePayload,
  SliceCaseReducers<InitStatePayload>,
  'signIn',
  SliceSelectors<InitStatePayload>,
  'signIn'
>({
  name: 'signIn',
  initialState: {
    user: undefined,
    loading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signInUserThunk.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(signInUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(signInUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as Error).message;
    });
  },
});

export const signInReducer = slice.reducer;
