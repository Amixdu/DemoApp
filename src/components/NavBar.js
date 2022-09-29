import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div>
                <h1>App</h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/details'>Details</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
