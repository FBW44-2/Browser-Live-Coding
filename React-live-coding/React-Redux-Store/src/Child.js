import React from 'react'
import GrandChild from './GrandChild'

export default function Child() {
    return (
        <div>
            <h1>This is our Child Component inside App</h1>
            <GrandChild />
        </div>
    )
}
