//mouse Event
//click
//change
//submit
//scroll
//keyboard Event
//keydown
//keyup


let h1 = document.querySelector("h1")
/* h1.onmouseover=function(event){
    console.log(event)
    document.querySelector("p").style.backgroundColor="red"
} */

/* h1.addEventListener("EventName/eventType", EventHandlerFunction ) */
/*  h1.addEventListener("click",()=>{
    console.log("working correctly")
} )  */

let clickHandler=(e)=>{
    console.log(e)
    h1.classList.add("header")
}
h1.addEventListener("click",clickHandler)




