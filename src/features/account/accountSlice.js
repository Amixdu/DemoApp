import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const { clearAccount, addExpense, addIncome } = accountSlice.actions;
export default accountSlice.reducer;