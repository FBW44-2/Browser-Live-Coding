//targeting all required element

let inp = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ul")


function createLayout(array){
    array.forEach(task=>{
            //create li and span elements
    let li = document.createElement("li")
    li.innerText= task
//attach event listener on each li
    li.addEventListener("click",(e)=>{
        li.classList.toggle("done")
        console.log("clicked on li")
        alert("Clicked on li")
    },false /* //useCaption(option=> true) */) 
    let span = document.createElement("span")
    span.innerText="X"
    span.addEventListener("click", (e)=>{
        console.dir(e)
        e.stopPropagation()
        /* e.stopImmediatePropagation() //if you attached 2 event listeners to span */
        console.log("clicked on span")
        console.log(e.target)
        ul.removeChild(e.target.parentElement) //e.target is a span and we are deleting parent of that span which is li
    },false)

    li.append(span)

    ul.appendChild(li)
    })
}

window.addEventListener("load",()=>{
    //get data from localstorage
    let data = localStorage.getItem("tasks")
    //convert it back inot original array
    let originalArray= JSON.parse(data)
    createLayout(originalArray) //create layout
})



let tasks=[]

btn.addEventListener("click", (e)=>{
    console.log("clicked")
    tasks.push(inp.value)
    //convert my tasks array into string
    let convertedData = JSON.stringify(tasks)
    //store this data into localStorage
    localStorage.setItem("tasks",convertedData)

    //create li and span elements
    let li = document.createElement("li") //<li></li> 
    li.innerText= inp.value //<li> task </li>
//attach event listener on each li
    li.addEventListener("click",(e)=>{
        li.classList.toggle("done")
     /*    console.log("clicked on li")
        alert("Clicked on li") */
    },false /* //useCaption(option=> true) */) 
   


    let span = document.createElement("span")// <span></span>
    span.innerText="X" // <span>X</span>
    span.addEventListener("click", (e)=>{
        console.dir(e)
        e.stopPropagation()
        /* e.stopImmediatePropagation() //if you attached 2 event listeners to span */
        console.log("clicked on span")
        console.log(e.target)
        ul.removeChild(e.target.parentElement) //e.target is a span and we are deleting parent of that span which is li
    },false)

    li.append(span)

    ul.appendChild(li)
    inp.value=""

})


/* localStorage.setItem(key,value) //add data into localstorage
localStorage.removeItem(key) // remove data from localstorage
localStorage.clear() // delete everything from localstorage */


//storing basic data inot localstorage
/* let data = {name:"John",age:23} */
   /*  JSON */
   //converting our data array into string
/*   let convertedData=  JSON.stringify(data)
console.log(convertedData)
 localStorage.setItem("users", convertedData) 
localStorage.setItem("name","Naqvi")

 let localData = localStorage.getItem("users")
 //converted it back to its original form
let convertedBack= JSON.parse(localData)
 console.log(convertedBack)

/*  localStorage.clear() */
/* localStorage.removeItem("name") */