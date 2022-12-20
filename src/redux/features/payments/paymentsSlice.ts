import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import paymentsService from './paymentsService';
import {PaymentProps} from '../../../types/types';

interface InitialState {
  loading: boolean;
  payments: PaymentProps[];
  error: string | undefined;
}

const initialState: InitialState = {
  loading: false,
  payments: [],
  error: '',
};

export const fetchPayments = createAsyncThunk('users/fetchUsers', async () => {
  try {
    return await paymentsService.fetchPayments();
  } catch (error: any) {
    return error;
  }
});

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPayments.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchPayments.fulfilled,
        (state, action: PayloadAction<PaymentProps[]>) => {
          state.loading = false;
          state.payments = action.payload;
          state.error = '';
        },
      )
      .addCase(fetchPayments.rejected, (state, action) => {
        state.loading = false;
        state.payments = [];
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default paymentsSlice.reducer;
