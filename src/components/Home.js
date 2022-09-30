import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import AddTransaction from './AddTransaction';
import TransactionHistory from './TransactionHistory';

const Home = () => {
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
            height: 600,
            backgroundColor: '#0277bd',
            p: 3,
          }}>

          <Balance />
          <IncomeExpense />
          <AddTransaction />
          <TransactionHistory />

        </Box>

      </div>

      

    </Box>
  )
}

export default Home
