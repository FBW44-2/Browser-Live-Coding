import React, { memo } from 'react'

 function Child({ChildCounter,incrementCallback}) {

    console.log("render Child")
    return (
        <div>
            <h2>Child Counter : {ChildCounter}</h2>
            <button onClick={incrementCallback}>increment child counter</button>
        </div>
    )
}


export default memo(Child)