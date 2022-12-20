import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import paymentService from './paymentService';
import {PaymentProps} from '../../../types/types';

type Message = string;

interface InitialState {
  payment: PaymentProps | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

const initialState: InitialState = {
  payment: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const fetchPayment = createAsyncThunk(
  'payment/fetchPayment',
  async (id: number, thunkAPI) => {
    try {
      return await paymentService.fetchPayment(id);
    } catch (error: any) {
      const message: Message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPayment.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.payment = null;
        state.message = '';
      })
      .addCase(fetchPayment.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.payment = action.payload;
        state.message = '';
      })
      .addCase(fetchPayment.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.payment = null;
        state.message = action.payload;
      });
  },
});

export default paymentSlice.reducer;
