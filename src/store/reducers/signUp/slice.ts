import {
  SliceCaseReducers,
  SliceSelectors,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import {SignUpRequestPayload, SignUpResponsePayload} from '#/types/signUp';

import {signUp} from '#/services';

import {signInUserThunk} from '../signIn';

export const signUpUserThunk = createAsyncThunk(
  'signUp/signUpUser',
  async (params: SignUpRequestPayload, thunkAPI) => {
    try {
      const response = await signUp(params);
      if (response) {
        thunkAPI.dispatch(
          signInUserThunk({
            email: params.email,
            password: params.password,
          }),
        );

        return response;
      }
      return undefined;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

type InitStatePayload = {
  loading: boolean;
  error: string | undefined;
  response: SignUpResponsePayload | undefined;
};

const slice = createSlice<
  InitStatePayload,
  SliceCaseReducers<InitStatePayload>,
  'signUp',
  SliceSelectors<InitStatePayload>,
  'signUp'
>({
  name: 'signUp',
  initialState: {
    response: undefined,
    loading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUpUserThunk.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(signUpUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(signUpUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const signUpReducer = slice.reducer;
