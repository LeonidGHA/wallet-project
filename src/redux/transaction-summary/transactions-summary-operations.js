import { createAsyncThunk } from '@reduxjs/toolkit';
import { transactionSummary } from 'shared/api/transactions-summary-api';

export const transactionSummaryUser = createAsyncThunk(
  'transaction-summary/get',
  async (data, { rejectWithValue }) => {
    try {
      const result = await transactionSummary(data);
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
