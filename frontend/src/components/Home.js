import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import AddTransaction from './AddTransaction';
import TransactionHistory from './TransactionHistory';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTransactions, calculateTotals } from '../features/account/accountSlice';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const { isLoading, transactions } = useSelector((state) => state.account)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [transactions, dispatch])

  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }} justifyContent="center" alignItems="center" >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="89vh"
    >
      <div>
        <Typography variant="h4">My Account</Typography>

        <Box
          sx={{
            width: 500,
            height: 625,
            backgroundColor: '#0277bd',
            p: 3,
          }}>

          <Balance />
          <IncomeExpense />
          <AddTransaction />
          <TransactionHistory title="Last Transaction" color="common.white" lastTransaction={true} />

        </Box>
      </div>
    </Box>
  )
}

export default Home
