import React, { Component } from 'react'
import { connect } from 'react-redux'

 class User extends Component {
    render() {
        return (
            <div>
                <h2>user name is {this.props.name} </h2>
            </div>
        )
    }
}


export default connect(state=>state)(User)




