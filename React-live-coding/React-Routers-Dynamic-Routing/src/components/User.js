import React from "react";
import queryString from "query-string"

export default function User(props) {

   /*  console.log(queryString.parse(props.location.search)) */
 /*    let query= props.location && queryString.parse(props.location.search) */

  const { first_name, last_name, avatar ,email} = props.location.state;
 /*    console.log(props.match.params.name)
    const user = props.users.find(item=>item.first_name===props.match.params.name) */


  return (
    <div>
      {/*  <h1>This is our user Component</h1>
            <h2>{props.location.state.first_name} {props.location.state.last_name} </h2>
            <img src={props.location.state.avatar} alt="" width="200"/> */}

      <h1>This is our user Component</h1>
    {/*     <h2>
        {user.first_name} {user.last_name}
      </h2>
      <img src={user.avatar} alt="" width="200" /> */}
      <h2>
          { first_name  }
      </h2>
      <img src={avatar} alt="" width="200" />
      <button onClick={()=>props.history.goBack()}>go back</button>
    </div>
  );
}
