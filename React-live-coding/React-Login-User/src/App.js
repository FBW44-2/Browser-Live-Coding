import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Profile from "./Profile";

export const MyContext = createContext(null);

function App() {
  const [isLogin,setIsLogin]=useState(false)
  const [userData,setUserData]=useState(null)

  return (
    <MyContext.Provider value={{isLogin,setIsLogin, userData,setUserData}}>
      <div className="App">
        <Navbar />
        <h1>Context API</h1>
        {isLogin? <Profile /> : <Login /> }  
      </div>
    </MyContext.Provider>
  );
}

export default App;
