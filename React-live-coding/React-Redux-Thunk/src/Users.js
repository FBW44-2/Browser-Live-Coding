import React from 'react'
import { connect } from 'react-redux'

function UsersAction(value){
    return {type:"getusers",payload:value}
}

/* const GetUsersAsync=()=>{
    return (dispatch)=>{
        fetch("https://reqres.in/api/users?page=2").then(res=>res.json()).then(result=>{
           dispatch(UsersAction(result.data))
       })
} */

const GetUsersAsync=()=>(dispatch)=>{
    fetch("https://reqres.in/api/users?page=2").then(res=>res.json()).then(result=>{
        dispatch(UsersAction(result.data))
    })
}

 function Users({users,dispatch}) {
     console.log(users)

     /* const fetchusers=()=>{
        fetch("https://reqres.in/api/users?page=2").then(res=>res.json()).then(result=>{
            dispatch({type:"getusers",payload:result.data})
        })
     } */


    return (
        <div>
            <button onClick={()=>dispatch(GetUsersAsync())}>fetch user</button>
           {/*  <button onClick={fetchusers}>fetch user</button> */}
            <ul>
                {users.map(user=>{
                    return(
                    <li key={user.id}>
                        <h3>{user.first_name}</h3>
                    <h4>{user.email}</h4>
                    <img src={user.avatar} alt="" width="100"/>
                     </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default connect(state=>state)(Users)
