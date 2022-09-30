import React from 'react'
import KeycloakService from '../services/KeycloakService'
import { Button } from '@mui/material'
import TransactionHistory from './TransactionHistory'

const Details = () => {
  return (
    <div>
      <Button onClick={() => KeycloakService.logout()}>
        Logout
      </Button>
      <TransactionHistory title="Transaction History" color="black"/>
    </div>
  )
}

export default Details
