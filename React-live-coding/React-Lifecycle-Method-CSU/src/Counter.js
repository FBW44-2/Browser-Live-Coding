import React, { Component } from 'react'

export default class Counter extends Component {

   /*  shouldComponentUpdate(nextprops,nextstate){
        console.log(nextprops)
        if(nextprops.counter<6|| nextprops.counter>10){
            return true
        }
        return false
    }
 */

    render() {
        console.log("render from Counter")
        return (
            <div>
                <h1>Counter: {this.props.counter}</h1>
            </div>
        )
    }
}
