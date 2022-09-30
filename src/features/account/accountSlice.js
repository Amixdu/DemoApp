import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transactions: [],
    total: 600,
    income: 1000,
    expenses: 400,
    isLoading: true,
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers:{
        clearAccount:(state) => {
            state.total = 0;
            state.income = 0;
            state.expenses = 0;
        },
        addTransaction: (state, action) => {
            const type = action.payload.type
            const amount = action.payload.amount
            const title = action.payload.title
            state.transactions = [{title, amount, type} , ...state.transactions]
        },
        addExpense:(state, action) => {
            const expenseAmt = action.payload
            state.expenses += expenseAmt
            state.total = state.total - expenseAmt
        },
        addIncome:(state, action) => {
            const incomeAmt = action.payload
            state.income += incomeAmt
            state.total += incomeAmt
        },
    }
})

export const { clearAccount, addTransaction, addExpense, addIncome } = accountSlice.actions;
export default accountSlice.reducer;