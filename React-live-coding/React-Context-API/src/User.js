import React from 'react'

export default function User(props) {
    console.log(props)
    return (
        <div>
            {props.children}
            <h1>This is our User {props.user}</h1>
            
        </div>
    )
}
