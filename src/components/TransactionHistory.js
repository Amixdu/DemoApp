import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Transaction from './Transaction';
import { Typography } from '@mui/material';

const TransactionHistory = ({ title, color }) => {
    const { transactions } = useSelector((state) => state.account)

    return (
        <Box sx={{
            mt: 4
        }}>
            <Typography variant='h6' color={color}>
                {title}
            </Typography>
            {transactions.length > 0
                ? <Transaction transaction={transactions[0]} />
                : <Typography variant='h8' color={color}>No Transactions</Typography>}
        </Box>
    )
}

export default TransactionHistory
