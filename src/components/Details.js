import React from 'react'
import KeycloakService from '../services/KeycloakService'

const Details = () => {
  return (
    <div>
      <button onClick={() => KeycloakService.logout()}>
        Logout
      </button>
    </div>
  )
}

export default Details
