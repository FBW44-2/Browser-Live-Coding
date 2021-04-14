import React from 'react'

export default function Students(props) {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>Misbah</li>
                <li>Phil</li>
                <li>Alagie</li>
            </ul>
            <button onClick={props.changeColor }>Change backgroundColor</button>
        </div>
    )
}
