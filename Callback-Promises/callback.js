//callback functions

//reason (when your code depends on another code/value ,you can use callback)
//reason 2(when you expect your code to execute in future)
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

/*  let email = "abc@gmail.com";
 let password = "123456"
 
 function fetchData(email, password, callback){
    //faking that we are sending and receiving data from server
    console.log("sending email and password to server")

                 setTimeout(()=>{
                    let name = "John"
                    callback(name)
                },4000)
 }
 function getUserHobbies(name,callback){
   //faking that we are sending and receiving data from server
   console.log("sending email and password to server")

   setTimeout(()=>{
       let userhobbies=["coding","reading","music"]
        callback(userhobbies)
   },2000)

 }
 function printHobbies(array){
     array.forEach(hobby=>{
         console.log(hobby)
     })
 }


 fetchData(email,password,(name)=>{
     getUserHobbies(name,(hobbies)=>{
         printHobbies(hobbies)
     })
 })

console.log("end") */


//use promises instead of callback

let email = "abc@gmail.com";
let password = "123456"

function fetchData(email, password){
   //faking that we are sending and receiving data from server
   console.log("sending email and password to server")
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
                   let name = "John"
                   if(name){
                       resolve(name)
                   }else{
                       reject("no data received from server")
                   }
               },4000)
    })
             
}
function getUserHobbies(name){
  //faking that we are sending and receiving data from server
  console.log("sending email and password to server")
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     /*  let userhobbies=["coding","reading","music"] */
     let userhobbies=null
      if(userhobbies){
         resolve(userhobbies) 
      }else{
             reject("no user hobbies found")
      }
    
  },2000)
})
  

}
function printHobbies(array){
    array.forEach(hobby=>{
        console.log(hobby)
    })
}


fetchData(email,password) //resolve()
.then(name=>getUserHobbies(name))// rejected
.then(hobbies=>printHobbies(hobbies))
.catch(err=>console.log(err))//rejected




console.log("end")

