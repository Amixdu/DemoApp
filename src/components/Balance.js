import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

const Balance = () => {
    const { total } = useSelector((state) => state.account)
    return (
        <div>
            <Typography variant='h6' color="common.white">
                Balance: $ {total}
            </Typography>
        </div>
    )
}

export default Balance
