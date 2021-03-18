let inputs = document.querySelectorAll("input")//NodeList



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

document.querySelector("h1").addEventListener("click", handler)




