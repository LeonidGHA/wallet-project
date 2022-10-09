import { createSlice } from '@reduxjs/toolkit';

import { transactionCategoriesUser } from './transaction-categories-operation';

const initialState = {
  categories: [],
  error: null,
  isLoading: false,
};

const transactionCategoriesSlice = createSlice({
  name: 'transaction-categories',
  initialState,
  extraReducers: {
    [transactionCategoriesUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionCategoriesUser.fulfilled]: (state, { payload }) => {
      state.categories = payload;
      state.isLoading = false;
    },
    [transactionCategoriesUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default transactionCategoriesSlice.reducer;
