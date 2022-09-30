import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Transaction from './Transaction';
import { Typography } from '@mui/material';

const TransactionHistory = ({ title, color, lastTransaction }) => {
    const { transactions } = useSelector((state) => state.account)

    return (
        <Box sx={{
            mt: 4
        }}>
            <Typography variant='h6' color={color}>
                {title}
            </Typography>
            {transactions.length > 0 ?
                lastTransaction ? <Transaction transaction={transactions[transactions.length - 1]} />
                    : transactions.map(transaction => {
                        return <Transaction transaction={transaction} />
                    })
                : <Typography variant='h8' color={color}>No Transactions</Typography>}
        </Box>
    )
}

export default TransactionHistory
