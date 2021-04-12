import {h1,ul,span} from "./Elements.js"
import {generateColor} from "./Color.js"
import randomNum from "./Math.js"
import "./lodash.js"


    h1.style.backgroundColor="gray"
    h1.style.color="white"




span.innerText = randomNum()

ul.style.backgroundColor=generateColor()



/* function Student(){
    let name= "dravid"
    let age = 32
    const detail=()=>{
        console.log(name)
    }
    return {
        detail,
        age
    }
}

let student = Student()
student.detail() */
