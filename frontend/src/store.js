import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/account/accountSlice";
import createSagaMiddleware from 'redux-saga'
import transactionSaga from './sagas/accountSaga';

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        account: accountReducer,
    },
    middleware: [saga]
})

saga.run(transactionSaga);