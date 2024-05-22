import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {signInReducer, categoryReducer, signUpReducer} from './reducers';

export const userReducer = combineReducers({});

const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
