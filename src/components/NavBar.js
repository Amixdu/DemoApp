import React from 'react'
import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const NavBar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Demo Application
                </Typography>
                <Button color='inherit' href='/'>Home</Button>
                <Button color='inherit' href='/details'>Details</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
