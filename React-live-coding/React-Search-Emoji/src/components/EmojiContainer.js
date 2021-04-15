import React from 'react'
import EmojiItem from './EmojiItem'

export default function EmojiContainer(props) {
    return (
            <ul style={{width:"80vw",margin:"20px auto",display:"flex",flexWrap:"wrap"}}>
                {props.emojiData.map(emoji=>{
                    return(
                        <EmojiItem key={emoji.title} symbol={emoji.symbol}/>
                    )
                })}
            </ul>
    )
}
