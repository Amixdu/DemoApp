import React from 'react'
import KeycloakService from '../services/KeycloakService'
import { Button } from '@mui/material'
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
    <div>
      <Button onClick={() => KeycloakService.logout()}>
        Logout
      </Button>
      <TransactionHistory title="Transaction History" color="black" />
    </div>
  )
}

export default Details
