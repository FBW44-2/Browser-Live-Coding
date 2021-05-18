import {useState,useEffect, useDebugValue} from 'react'

export default function useFetch() {

    const [message,setMessage]=useState("")

    useEffect(()=>{
            setTimeout(()=>{
                setMessage("Message set")
            },2000)
    },[])

 /*    useDebugValue(message?"message updated": "message not yet set") */
   useDebugValue(message,(message)=>message?"message updated": "message not yet set") 

    return (
        message
    )
}
