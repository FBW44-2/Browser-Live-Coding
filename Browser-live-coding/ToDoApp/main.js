//event Delegation (attach event listener to parent element instead of attaching event listeners to children)

//targeting all required element

let inp = document.querySelector("input")
let btn = document.querySelector("button")

let ul = document.querySelector("ul")
//initial value
let tasks=JSON.parse(localStorage.getItem("tasks"))

function createTask(value){
    let li = document.createElement("li")
    li.innerText= value
    let span = document.createElement("span")
    span.innerText="X"
    li.append(span)
    ul.appendChild(li)
}



//user provides you value through input field
btn.addEventListener("click", (e)=>{
    console.log("clicked")
    tasks.push(inp.value)
    //convert my tasks array into string
    let convertedData = JSON.stringify(tasks)
    //store this data into localStorage
    localStorage.setItem("tasks",convertedData)

    createTask(inp.value)
    inp.value=""

})



ul.addEventListener("click",(e)=>{
    console.dir(e.target.nodeName)
    if(e.target.nodeName==="LI"){
        e.target.classList.toggle("done")
    }
    else if(e.target.nodeName==="SPAN"){
        ul.removeChild(e.target.parentElement)
        console.log(e.target.parentElement.innerText)
        let text =e.target.parentElement.innerText
        let value = text.slice(0,text.length-1)

        console.log(value)

        let updatedArray = tasks.filter(task=>task!==value)
        localStorage.setItem("tasks",JSON.stringify(updatedArray))
        
        tasks=updatedArray
    }
})




//onload 
function createLayout(array){
    array.forEach(task=>{
            //create li and span elements
            createTask(task)
    })
}

window.addEventListener("load",()=>{
    //get data from localstorage
    let data = localStorage.getItem("tasks")
    //convert it back inot original array
    let originalArray= JSON.parse(data)
    createLayout(originalArray) //create layout
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