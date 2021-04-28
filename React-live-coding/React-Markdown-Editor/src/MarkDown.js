import React from 'react'

export default function MarkDown({text, setText}) {

    return (
        <>
        <textarea onChange={(e)=>setText(e.target.value)} style={{width:"100%",height:"400px",padding:"10px"}} value={text} > </textarea>
        <img src="https://preview.pixlr.com/images/800wm/100/1/1001181840.jpg" width="30" onClick={()=>setText("")} alt="" style={{position:"absolute",bottom:"20px", right:"30px",cursor:"pointer"}}/>
        </>
        )
}
