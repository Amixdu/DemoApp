import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

const IncomeExpense = () => {
    const { income, expenses } = useSelector((state) => state.account)
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
            <Card sx={{ maxWidth: 200, mt: 2, mr: 2 }}>
                <CardContent>
                    <Typography variant='h6' color="green">
                        Income: $ {income}
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 200, mt: 2 }}>
                <CardContent>
                    <Typography variant='h6' color="red">
                        Expenses: $ {expenses}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default IncomeExpense
