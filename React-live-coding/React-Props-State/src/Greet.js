import React from "react"

function GreetUser(props){
    console.log(props)
    return(
        <>
        <h1>Hi, {props.name}</h1>
        </>
    )
}

export default GreetUser;
