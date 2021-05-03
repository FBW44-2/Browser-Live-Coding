import React, { useState } from 'react'
import GrandChild1 from './GrandChild1'

export default function Child1() {
   
    return (
        <div>
            <h2> First Child in App</h2>
            <h2>Count Value: </h2>
            <GrandChild1/>
        </div>
    )
}
