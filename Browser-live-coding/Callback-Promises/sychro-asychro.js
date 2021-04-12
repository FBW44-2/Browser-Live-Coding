console.log("line 1")//sychronous
console.log("line 2")//sychronous
console.log("line 3")//sychronous
console.log("line 4")//sychronous
console.log("line 5")//sychronous
console.log("line 6")//sychronous
console.log("line 7")//sychronous //blocking
setTimeout(()=>{
    for(let i= 0;i<=1000000000;i++){

    } //blocking
},0)  //asychronous code //non-blocking
console.log("line 9")//sychronous
console.log("line 10")//sychronous
