//targeting all required element
let input= document.querySelector("input")
let btn= document.querySelector("button")
let ul = document.querySelector("ul")

let tasks =[]

btn.addEventListener("click",()=>{
    let li = document.createElement("li")
    let span = document.createElement("span")
    li.innerText=input.value
    span.innerText="X"
    li.append(span)
    console.log(li)
    ul.appendChild(li)
    tasks.push(input.value)
    console.log(tasks)
})

