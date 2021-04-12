import "!style-loader!css-loader!./style.css"
import {sum} from "./math.js"
import {generateColor} from "./Color.js"

let h1= document.querySelector("h1")
h1.style.backgroundColor=generateColor()
h1.style.color="white"



sum(2,3)