import React from 'react'

export default function Teachers(props) {
    return (
        <div>
            <h1>Teacher List</h1>
            <ul>
                <li>Naqvi</li>
                <li>Benjamin</li>
                <li>Ahmad</li>
            </ul>
            <button onClick={props.changeColor }>Change backgroundColor</button>
        </div>
    )
}