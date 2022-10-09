import { createSlice } from '@reduxjs/toolkit';

import { transactionSummaryUser } from './transactions-summary-operations';

const initialState = {
  categoriesSummary: [],
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
  year: 0,
  month: 0,
  isLoading: false,
  error: null,
};

const transactionSummarySlice = createSlice({
  name: 'transactionSummary',
  initialState,
  extraReducers: {
    [transactionSummaryUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionSummaryUser.fulfilled]: (state, { payload }) => {
      const newState = {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
      return newState;
    },
    [transactionSummaryUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default transactionSummarySlice.reducer;
