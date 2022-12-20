import {configureStore} from '@reduxjs/toolkit';
import paymentsReducer from './features/payments/paymentsSlice';
import paymentReducer from './features/payment/paymentSlice';

const store = configureStore({
  reducer: {
    payments: paymentsReducer,
    payment: paymentReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
