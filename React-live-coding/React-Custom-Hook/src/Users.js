import React from "react";
import useFetch from "./customHook";

export default function Users() {
 
    const [users,setUsers]=useFetch("https://reqres.in/api/users?page=2")

    console.log(users)

  return (
    <div>
      {users.data && users.data.map((user) => {
        return (
          <div>
            <h2>{user.first_name}</h2>
            <h3>{user.email}</h3>
            <img src={user.avatar} alt="" width="100" />
          </div>
        );
      })}
    </div>
  );
}
