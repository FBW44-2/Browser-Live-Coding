
console.log("start")


new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let data = "abc"
        console.log("message from inside the promise")
        resolve(data)
    },3000) 
}).then(data=>console.log(data))
   



console.log("end")