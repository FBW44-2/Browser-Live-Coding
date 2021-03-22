let inp = document.querySelector("input")

inp.addEventListener("focus",(e)=>{
    inp.style.backgroundColor="yellow"
})

let checkbox = document.querySelector("input[type=checkbox]")

checkbox.addEventListener("change",(e)=>{
    console.log(checkbox.value)
    console.log(checkbox.checked)
})


let range = document.querySelector("input[type=range]")

range.addEventListener("change",(e)=>{
    let h1= document.querySelector("h1")
    h1.style.fontSize=range.value+"px"
    console.log(range.value)
})


let select= document.querySelector("select")
select.addEventListener("change",(e)=>{
    console.log(e.target.value)
})


let radiobtns = document.querySelectorAll("input[type=radio]")

radiobtns.forEach(radio=>{
    radio.addEventListener("change",(e)=>{
        console.log(radio.value)
        console.log(radio.checked)
    })
})

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