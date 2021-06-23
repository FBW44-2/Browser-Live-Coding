import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/records">Records</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/orders">Orders</Link></li>
            </ul>
        </nav>
    )
}
