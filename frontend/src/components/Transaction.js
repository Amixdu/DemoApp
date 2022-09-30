import React from 'react'
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Transaction = ({ transaction }) => {
    return (
        <Card sx={{ mb: 2, minWidth: 450 }}>
            <CardContent>
                <Typography variant='h6' color={transaction.type === "income" ? "green" : "red"}>
                    {transaction.title + "   " + transaction.amount}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Transaction
