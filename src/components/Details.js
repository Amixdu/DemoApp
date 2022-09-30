import React from 'react'
import KeycloakService from '../services/KeycloakService'
import { Button } from '@mui/material'

const Details = () => {
  return (
    <div>
      <Button onClick={() => KeycloakService.logout()}>
        Logout
      </Button>
    </div>
  )
}

export default Details
