import React, { Component } from 'react'

export default class Timer extends Component {
    state={
        time:new Date().toTimeString()
    }

    interval=null

    componentDidMount(){
        this.interval= setInterval(()=>{
            console.log("timer running")
            this.setState({
                time:new Date().toTimeString() 
            })
        },1000)
    }

    //react will call this method just before removing that component from DOM
    componentWillUnmount(){
        console.log("unmounted component")
        clearInterval(this.interval)
       
    }

    render() {
        return (
            <div>
                <h1>Time: {this.state.time}</h1>
            </div>
        )
    }
}
