import React from "react"

function User(props){
    return(
        <div className="card" style={{ width: "250px" }} key={props.user.id}>
        <h2>
          {props.user.first_name} {props.user.last_name}
        </h2>
        <p>{props.user.email}</p>
        <img src={props.user.avatar} width="200" alt="" />
      </div>
    )
}

export default User;