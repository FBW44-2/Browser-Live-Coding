import { useEffect, useState } from "react"
import axios from "axios"


export default function useFetch(url) {
    const [data,setData]=useState([])

    useEffect(()=>{
       /*  fetch(url).then(res=>res.json()).then(result=>{
            setData(result) 
        })*/
        axios.get(url).then(result=>setData(result.data))
    },[url])


    return (
       [data,setData]
    )
}
