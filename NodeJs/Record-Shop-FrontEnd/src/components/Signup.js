import React, { useState } from 'react'

export default function Signup() {

/* const [userdata,setUserdata]=useState({firstname:"", lastname:"",email:"",password:""}) */

    const signupForm=(e)=>{
        e.preventDefault()
        const user={
            firstname: e.target.elements["firstname"].value,
            lastname:e.target.elements["lastname"].value,
            email:e.target.elements["email"].value,
            password:e.target.elements["password"].value
        }

    }
    return (
        <div>
            <form onSubmit={signupForm} >
                <label>
                    First Name: <input type="text" name="firstname" placeholder="Enter Frist Name" required /* onChange={(e)=>setUserdata({...userdata,firstname:e.target.value})} */ />
                </label><br />
                <label>
                    Last Name: <input type="text" name="lastname" placeholder="Enter Last Name" required /* onChange={(e)=>setUserdata({...userdata,lastname:e.target.value})} */  />
                </label><br />
                <label>
                    Email: <input type="email" name="email" placeholder="Enter Email" required /* onChange={(e)=>setUserdata({...userdata,email:e.target.value})} */ />
                </label><br />
                <label>
                    Password: <input type="password" name="password" placeholder="Enter password" required  /* onChange={(e)=>setUserdata({...userdata,password:e.target.value})} *//>
                </label><br />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}
