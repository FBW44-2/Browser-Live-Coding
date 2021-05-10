import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";

 function GrandChild(props) {
  console.log(props);
  /*  const name = useSelector(state=>state.name)
    const age = useSelector(state=>state.age) */
 /*  const { name, age } = useSelector((state) => state);
  const dispatch = useDispatch(); */

  return (
    <div>
      <h2>This is our GrandChild Component of App inside Child</h2>
      <h2>hi,{props.name}</h2>
      <h3>Your age is : {props.age}</h3>
      <button onClick={()=>props.dispatch({type:"increment"})}>
        increment age
      </button>
    </div>
  );
}
/* const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps )(GrandChild) */

export default connect(state=>state )(GrandChild)