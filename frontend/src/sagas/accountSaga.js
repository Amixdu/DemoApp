import { call, put, takeEvery } from 'redux-saga/effects';
import { getTransactionsFinish } from '../features/account/accountSlice';
import axios from 'axios';

function* workGetTransactions(){
    const transactions = yield call(() => axios.get('http://localhost:8000/transactions'));
    const formattedTransactions = transactions.data;
    yield put(getTransactionsFinish(formattedTransactions.transactions));
}

function* workAddTransactions(action){
    const tr = {
        title: action.payload.title,
        amount: action.payload.amount,
        type: action.payload.type
    }

    yield call(() => axios.post('http://localhost:8000/transactions', tr))
}

function* transactionSaga(){
    yield takeEvery('account/getTransactions', workGetTransactions)
    yield takeEvery('account/addTransaction', workAddTransactions)
}

export default transactionSaga;