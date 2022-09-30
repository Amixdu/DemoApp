import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

const IncomeExpense = () => {
    const { income } = useSelector((state) => state.account)
    return (
        <Box
            sx={{
                display: 'flex',
            }}>
            <Card sx={{ maxWidth: 200, mt: 2 }}>
                <CardContent>
                    <Typography variant='h6'>
                        Income: $ {income}
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 200, mt: 2 }}>
                <CardContent>
                    <Typography variant='h6'>
                        Income: $ {income}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default IncomeExpense
