import React from 'react'
import marked from "marked"

export default function Previewer({text}) {
    //converting markdown into html (string)
    const html = marked(text)

    return (
        <div className="bg-dark border text-white" style={{height:"400px",padding:"10px"}} dangerouslySetInnerHTML={ {__html:html} }>
            
        </div>
    )
}
