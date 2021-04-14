import React from "react";

export default function Article(props) {
  return (
    <div style={{width:"300px"}}>
      <h1>{props.data.heading}</h1>
      <p>{props.data.para1}</p>
      <p>{props.data.para2}</p>
    </div>
  );
}


/* function Button(props){
    return 
<button onClick={}>{props.name}</button>
}

<Button name="login"/>
<Button name="signup"/>
<button onClick={} >login</button>
<button onClick={} >signup</button> */