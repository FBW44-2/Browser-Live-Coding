import React, { useState } from 'react'

export default function Signup() {

/* const [userdata,setUserdata]=useState({firstname:"", lastname:"",email:"",password:""}) */

    const signupForm=(e)=>{
        e.preventDefault()
       /*  let formdata = new FormData(e.target)
        for(let pair of formdata){
            console.log(pair)
        } */
        const user={
            firstname: e.target.elements["firstname"].value,
            lastname:e.target.elements["lastname"].value,
            email:e.target.elements["email"].value,
            password:e.target.elements["password"].value
        }
        //sending post request to express-server
        fetch("http://localhost:3000/users",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                    console.log(result.data)
            }else{
                console.log(result.message)
            }
        })

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
