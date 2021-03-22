let inp = document.querySelector("input")

inp.addEventListener("focus",(e)=>{
    inp.style.backgroundColor="yellow"
    inp.style.fontSize="40px"
})

let checkbox = document.querySelector("input[type=checkbox]")

checkbox.addEventListener("change",(e)=>{
    console.log(checkbox.value)
    console.log(checkbox.checked)
})


let checkbox = document.querySelector("input[type=checkbox]")
/* inp.addEventListener("change",(e)=>{
    console.log(inp.value)
}) */

//keyboard events
/* inp.addEventListener("keyup",(e)=>{
    console.log(inp.value)
}) */

/* inp.addEventListener("keydown",(e)=>{
    console.log(inp.value)
}) */

/* document.addEventListener("keydown",(e)=>{
    console.log(e)
}) */