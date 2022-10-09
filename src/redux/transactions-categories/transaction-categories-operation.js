import { createAsyncThunk } from '@reduxjs/toolkit';

import { transactionCategories } from 'shared/api/transaction-categories-api';

export const transactionCategoriesUser = createAsyncThunk(
  'transactionCategories/fetch',
  async (data, { rejectWithValue }) => {
    try {
      const result = transactionCategories(data);
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
