//traversing in DOM

let ul = document.querySelector("ul")

/* ul.style.backgroundColor="yellow" */
console.dir(ul)
ul.children[0].style.backgroundColor="blue"
/* ul.previousElementSibling.style.backgroundColor="gray"
ul.nextElementSibling.style.color="red" */

/* console.log(ul.parentElement) */
/* let li = document.querySelector("li:nth-child(1)") */

/* let h1 = document.querySelector("h1") */
/* 
let main = document.querySelector(".main")
main.children[3] */






/* 1.way to style elements in javascript */
/* ul.style.backgroundColor="yellow"
ul.style.border="2px solid black" */

/* 2.way to style elements in javascript */

/* ul.style.cssText="background-color:yellow; border:2px solid black;color: red;" */

/* 3.way to style elements in javascript */

/* let styling={
    backgroundColor:"yellow",
    color:"red",
    border:"2px solid black",
}

Object.assign(ul.style,styling)
Object.assign(ul.nextElementSibling.style,styling) */

/* 4.way to style elements in javascript */

/* ul.className="list" */
ul.classList.add("list")
console.log(ul)

