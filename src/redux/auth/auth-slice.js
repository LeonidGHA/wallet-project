import { createSlice } from '@reduxjs/toolkit';

import {
  registerUser,
  logInUser,
  logOutUser,
  refreshUser,
} from './auth-operations';

const initialState = {
  user: {
    id: '',
    username: '',
    email: '',
    balance: 0,
  },
  token: '',
  isLogIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.isLogIn = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLogIn = false;
      state.isLoading = false;
      state.error = payload;
    },
    [logInUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.isLogIn = true;
    },
    [logInUser.rejected]: (state, { payload }) => {
      state.isLogIn = false;
      state.isLoading = false;
      state.error = payload;
    },
    [logOutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logOutUser.fulfilled]: () => {
      return initialState;
    },
    [logOutUser.rejected]: (state, { payload }) => {
      state.isLogIn = true;
      state.isLoading = false;
      state.error = payload;
    },
    [refreshUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.isLogIn = true;
    },
    [refreshUser.rejected]: (state, { payload }) => {
      state.isLogIn = false;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
