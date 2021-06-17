import React, { useRef, useContext } from 'react'
import { MyContext } from './App'



export default function Login() {

    const { setIsLogin, setUserData } = useContext( MyContext )

    const userStoreData = {
        username: "nrcool",
        password: "123456"
    }

    const username = useRef()
    const password = useRef()

    const checkLogin = ( e ) => {
        e.preventDefault()
        if ( username.current.value === userStoreData.username && password.current.value === userStoreData.password ) {
            setIsLogin( true )
            setUserData( { name: username.current.value } )

        } else {
            console.log( "Username or Password is wrong, please try again" )
        }
    }

    return (
        <div>
            <form onSubmit={ checkLogin } >
                <label>UserName: <input type="text" name="name" ref={ username } /></label> <br />
                <label>Password: <input type="password" name="password" ref={ password } /></label> <br />
                <button>Login</button>
            </form>
        </div>
    )
}
