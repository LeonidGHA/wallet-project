import { createAsyncThunk } from '@reduxjs/toolkit';

import { registration, logIn, logOut, refresh } from 'shared/api/auth-api';
import { setToken } from 'shared/api/auth-api';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await registration(data);
      // console.log(result);
      return result;
    } catch (error) {
      const statusErr = error.response.status;
      const messageErr = error.response.data.message;
      if (statusErr === 400) {
        console.log(messageErr);
      }
      if (statusErr === 409) {
        console.log(messageErr);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue }) => {
    try {
      const result = await logIn(data);
      // console.log(result);
      return result;
    } catch (error) {
      const statusErr = error.response.status;
      const messageErr = error.response.data.message;
      if (statusErr === 400) {
        console.log(messageErr);
      }
      if (statusErr === 403) {
        console.log(messageErr);
      }
      if (statusErr === 404) {
        console.log(messageErr);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async (data, { rejectWithValue }) => {
    try {
      await logOut(data);

      return;
    } catch (error) {
      const statusErr = error.response.status;
      const messageErr = error.response.data.message;
      if (statusErr === 401) {
        console.log(messageErr);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const value = getState();
    const token = value.auth.token;

    if (!token) {
      return rejectWithValue(`token is invalid`);
    }
    setToken(token);
    try {
      const result = await refresh();
      return result;
    } catch (error) {
      const statusErr = error.response.status;
      const messageErr = error.response.data.message;
      if (statusErr === 401) {
        console.log(messageErr);
      }
      return rejectWithValue(error.message);
    }
  }
);
