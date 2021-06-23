import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

export default function Profile() {
    const {user} = useContext(MyContext)
    return (
        <div>
            <h2>Welcome, {user.firstname} {user.lastname}</h2>
            <p>Email: {user.email}</p>
        </div>
    )
}
