/* let inputs = document.querySelectorAll("input")//NodeList

let btn = document.querySelector("button")
let p =document.querySelector("p")
btn.addEventListener("click",()=>{
   console.dir(inputs) 
   p.innerText= `hi, ${inputs[0].value} ${inputs[1].value}`
})


let count = 1;
 function handler(){
        alert(`user clicked ${count} times`)
        count++;
    if(count>5){
        console.log("object")
        document.querySelector("h1").removeEventListener("click",handler)
    }
 }

document.querySelector("h1").addEventListener("click", handler) */

/* let ul = document.querySelector("ul") */

//add event listener
/*  ul.addEventListener("mouseenter", ()=>{
     console.log("entered into UL")
     ul.classList.add("nav")
 })
 
ul.addEventListener("mouseleave",()=>{
    ul.classList.remove("nav")
}) */

/*   ul.addEventListener("click", ()=>{
     console.log("entered into UL")
     ul.classList.toggle("nav")
 }) */
 
/*  let dropdown = document.querySelector(".dropdown")

 dropdown.addEventListener("click",(e)=>{
        console.log(e)
        let i = document.querySelector("i")
        i.classList.toggle("nav") //remove that class
        ul.classList.toggle("nav") //add that class
 }) */


 let ul = document.querySelector("ul")

 document.addEventListener("click",(event)=>{
/*     console.log(event) */
    console.log(event.target) //where user clicks
   /*  event.target.style.backgroundColor="green" */
 /*   ul.removeChild(event.target) */
    console.log(event.currentTarget)  //element who is listening for that event 
 //element to which you attached event listener
 })