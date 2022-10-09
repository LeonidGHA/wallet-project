import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../auth/auth-slice';
import transactionCategoriesReducer from 'redux/transactions-categories/transaction-categories-slice';
import transctionControllerReducer from 'redux/transactions-controller/transaction-contoller-slice';
import transactionsSummaryReducer from 'redux/transaction-summary/transactions-summary-slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  transactionCategories: transactionCategoriesReducer,
  transactionsController: transctionControllerReducer,
  transactionsSummary: transactionsSummaryReducer,
});
