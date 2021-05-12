import React from 'react'
import { connect } from 'react-redux'

 function Counter({counter,dispatch}) {
    return (
        <div>
            <h2>Counter: {counter} </h2>
            <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        </div>
    )
}
export default connect(state=>state)(Counter)