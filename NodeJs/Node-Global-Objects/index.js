 let a = 30;
let sum=(a,b)=>{
    console.log("sum of two number ")
}


//ECMScript syntac
// export default a //default export
// export {sum}; //named export


/* CommonJS syntac */
module.exports = a  //default export 
/* module.exports = {sum} */ // named export {} overwriting {sum}
/* module.exports.sum = sum */       /* {} = {sum:sum} */