import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transactions: [],
    total: 0,
    income: 0,
    expenses: 0,
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
        getTransactions: (state) => {
            state.isLoading = true
        },
        getTransactionsFinish: (state, action) => {
            state.transactions = action.payload
            state.isLoading = false
        },
        addTransaction: (state, action) => {
            const type = action.payload.type
            const amount = action.payload.amount
            const title = action.payload.title
            state.transactions = [...state.transactions, {title, amount, type}]
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
        calculateTotals:(state)=> {
            let tot = 0
            let income = 0
            let expenses = 0
            state.transactions.forEach((transaction) => {
                if (transaction.type === "income"){
                    tot += transaction.amount
                    income += transaction.amount
                } else{
                    tot = tot - transaction.amount
                    expenses += transaction.amount
                }
            })
            state.total = tot
            state.income = income
            state.expenses = expenses
        },
    }
})

export const { clearAccount, getTransactions, getTransactionsFinish, addTransaction, addExpense, addIncome, calculateTotals } = accountSlice.actions;
export default accountSlice.reducer;