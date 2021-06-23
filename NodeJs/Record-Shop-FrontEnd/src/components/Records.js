import React, { useEffect, useState } from 'react'

export default function Records() {

    const [records,setRecords]=useState([])

    //onLoad fetch data from express-server
    useEffect(()=>{
        fetch("http://localhost:3000/records",{
            headers:{
                "x-auth":localStorage.getItem("x-auth") }
             }
        )
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                //storing records in state
                setRecords(result.data)
            }else{
                console.log(result.message)
            }
        })

    }, [])


    return (
        <div>
            { records.map(rec=>{
                return(
                    <div key={rec._id}> 
                        <h3>Record Title: {rec.title}</h3>
                        <p>price : ${rec.price}</p>
                        <img src={rec.img} alt="" width="200" />
                     </div>
                )
            })}
        </div>
    )
}
