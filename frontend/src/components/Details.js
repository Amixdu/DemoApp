import React from 'react'
import TransactionHistory from './TransactionHistory'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getTransactions } from '../features/account/accountSlice'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Details = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.account)

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
      <TransactionHistory title="Transaction History" color="black" />
    </Box>
  )
}

export default Details
