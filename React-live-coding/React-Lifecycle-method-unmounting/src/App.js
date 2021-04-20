import React, { Component } from 'react'
import Timer from './Timer'

export default class App extends Component {
  state={
    statusTimer:true
  }

  toggle=()=>{
    this.setState({
      statusTimer: !this.state.statusTimer
    })
  }
  render() {
    return (
      <div>
        {this.state.statusTimer && <Timer/> } 
        <button onClick={this.toggle}>Show/Hide Timer</button>
      </div>
    )
  }
}
