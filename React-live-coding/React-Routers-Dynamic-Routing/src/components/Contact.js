import React from 'react'

export default function Contact(props) {
    console.log(props)
    return (
        <div>
            <h1>This is our Contact Page</h1>
            <button onClick={()=>props.history.push("/users")}>go back</button>
        </div>
    )
}
