
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"


const initialState={
    counter:0,
    users:[]
}
const Reducer =(state=initialState,action)=>{
    console.log(action)
    switch(action.type){
        case "increment":
            return {...state,counter:state.counter+1 } //sychronous code
        case "getusers":
           return {...state, users:action.payload}
        default:
            return state
    }
}

const middleware = applyMiddleware(thunk)

const store = createStore(Reducer,middleware)

reactDOM.render(<Provider store={store}> <App/> </Provider>,document.getElementById("root"))