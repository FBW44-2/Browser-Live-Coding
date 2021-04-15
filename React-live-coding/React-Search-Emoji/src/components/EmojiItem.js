import React from 'react'

export default function EmojiItem(props) {
    return (
        <li style={{listStyle:"none",width:"200px",height:"200px",textAlign:"center",margin:"10px",lineHeight:"200px",fontSize:"50px",backgroundColor:"white",boxShadow:"3px 5px 5px gray",borderRadius:"25px"}}>{props.symbol}</li>
    )
}
