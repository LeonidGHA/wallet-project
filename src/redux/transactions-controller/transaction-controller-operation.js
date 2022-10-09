import { createAsyncThunk } from '@reduxjs/toolkit';
import { refreshUser } from 'redux/auth/auth-operations';

import {
  transactionPost,
  transactionGet,
  transactionPatch,
  transactionDelete,
} from 'shared/api/transactions-api';

export const transactionPostUser = createAsyncThunk(
  'transaction/post',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const result = await transactionPost(data);
      // console.log(result);
      dispatch(transactionGetUser());
      dispatch(refreshUser());
      return result;
    } catch (error) {
      const statusErr = error.response.status;
      const messageErr = error.response.data.message;
      if (statusErr === 400) {
        console.log(messageErr);
      }
      if (statusErr === 401) {
        console.log(messageErr);
      }
      if (statusErr === 404) {
        console.log(messageErr);
      }
      if (statusErr === 409) {
        console.log(messageErr);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const transactionGetUser = createAsyncThunk(
  'transaction/get',
  async (_, { rejectWithValue }) => {
    try {
      const result = await transactionGet();
      console.log(result);
      return result;
    } catch (error) {
      const statusErr = error.response.status;
      const messageErr = error.response.data.message;
      if (statusErr === 400) {
        console.log(messageErr);
      }
      if (statusErr === 401) {
        console.log(messageErr);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const transactionPatchUser = createAsyncThunk(
  'transaction/path',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const result = await transactionPatch(id);
      dispatch(transactionGetUser());
      dispatch(refreshUser());
      return result;
    } catch (error) {
      const statusErr = error.response.status;
      const messageErr = error.response.data.message;
      if (statusErr === 400) {
        console.log(messageErr);
      }
      if (statusErr === 401) {
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

export const transactionDeleteUser = createAsyncThunk(
  'transaction/delete',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const result = await transactionDelete(id);
      dispatch(transactionGetUser());
      dispatch(refreshUser());
      return result;
    } catch (error) {
      const statusErr = error.response.status;
      const messageErr = error.response.data.message;
      if (statusErr === 400) {
        console.log(messageErr);
      }
      if (statusErr === 401) {
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
