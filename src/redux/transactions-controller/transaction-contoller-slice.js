import { createSlice } from '@reduxjs/toolkit';

import {
  transactionGetUser,
  transactionPostUser,
  transactionPatchUser,
  transactionDeleteUser,
} from './transaction-controller-operation';

const initialState = {
  transactions: [],
  error: null,
  isLoading: false,
};

const transactionControllerSlice = createSlice({
  name: 'transaction-controller',
  initialState,
  extraReducers: {
    [transactionGetUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionGetUser.fulfilled]: (state, { payload }) => {
      state.transactions = payload;
      state.isLoading = false;
    },
    [transactionGetUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [transactionPostUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionPostUser.fulfilled]: (state, { payload }) => {
      state.transactions = [...state.transactions, payload];
      state.isLoading = false;
    },
    [transactionPostUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [transactionPatchUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionPatchUser.fulfilled]: (state, { payload }) => {
      state.transactions = state.transactions.map(el =>
        el.id === payload.id ? payload : el
      );
      state.isLoading = false;
    },
    [transactionPatchUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [transactionDeleteUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionDeleteUser.fulfilled]: (state, { payload }) => {
      state.transactions = state.transactions.filter(el => el.id !== payload);
      state.isLoading = false;
    },
    [transactionDeleteUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default transactionControllerSlice.reducer;
