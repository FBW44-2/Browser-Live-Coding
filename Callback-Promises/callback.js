//callback functions

//reason (when your code depend on another code/value ,you use callback)
//reson 2(when you execute your code in future)
/* function PrintSum(sum){
    console.log(sum)
}


function sum(a,b,callback){
    let sum = a+b
    callback(sum)
}

sum(2,3,PrintSum) */

/* function PrintSum(sum){
    console.log(sum)
}


function sum(a,b){
    let sum = a+b
    return sum
}

let calculatedSum = sum(2,3)
PrintSum(calculatedSum) */


/* let btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    console.log("user clicked")
} ) */

/* setTimeout(()=>{
    console.log("timer running")
},1000) */


/* function print(first,last){
    console.log(first + " " +last )
}

setTimeout(print, 2000, "Naqvi","Ali" ) */

/* setTimeout(()=>{
    print("Naqvi","Ali")
},2000) */


console.log("start")

/* function printStudentName(){
    for(let i=0;i<=1000000000;i++){
        if(i===1000000000){
            console.log("student name")
        }
    }
}
printStudentName() */
/* setTimeout(()=>{
    console.log("student Name")
},2000)
 */

 let email = "abc@gmail.com";
 let password = "123456"
 
 function PrintName(Name){
     console.log(Name)
 }

 function fetchData(email, password, callback){
    //faking that we are sending and receiving data from server
    console.log("sending email and password to server")

                 setTimeout(()=>{
                    let name = "John"
                    callback(name)
                },4000)
 }
 
 fetchData(email,password,printName)


console.log("end")




