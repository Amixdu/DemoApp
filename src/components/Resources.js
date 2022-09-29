import React from 'react'
import KeycloakService from '../services/KeycloakService'
import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';


const Resources = () => {
    const [success, setSuccess] = useState(false)
    // const [keycloak, setKeycloak] = useState(null)
    // const [authenticated, setAuthenticated] = useState(false)

    // useEffect(() => {
    //     const keycloak = new Keycloak('/keycloak.json');
    //     keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
    //         setKeycloak(keycloak)
    //         setAuthenticated(authenticated)
    //     })
    // }, [])

    // if (keycloak){
    //     if (authenticated){
    //         return(
    //             <p>Logged in</p>
    //         )
    //     }
    //     else {
    //         return(
    //             <p>Login failed</p>
    //         )
    //     }
    // }

    // return (
    //     <p> Loading </p>
    // )

    const loadResource = () => {
        setSuccess(true)
    }

    useEffect(() => {
        KeycloakService.initKeycloak(loadResource)
    }, [])

    if (success) {
        return (
            <>
                <p> Logged In </p>
                <button onClick={() => KeycloakService.logout()}> Logout </button>
            </>
        )
    }
}

export default Resources
