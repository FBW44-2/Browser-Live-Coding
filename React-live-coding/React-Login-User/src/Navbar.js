import React, { useContext } from 'react'
import { MyContext } from './App'

export default function Navbar() {

    const {isLogin,userData} = useContext(MyContext)
    return (
       <ul style={{display:"flex",justifyContent:"space-around"}}>
           <li>Home</li>
           <li>About</li>
           {isLogin? <><li>Profile</li>
           <li>hi {userData.name}</li> </> : <li>login</li>  }
           
          
       </ul>
    )
}
