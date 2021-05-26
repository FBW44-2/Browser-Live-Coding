 let a = 30;
let sum=(a,b)=>{
    console.log("sum of two number ")
}


//ECMScript syntac
// export default a //default export
// export {sum}; //named export


/* CommonJS syntac */
module.exports = a  //default export 
/* module.exports = {sum} */ // defaultexport {} overwriting {sum}
/* module.exports.sum = sum */  /* named export */    /* {sum:} = {sum:sum} */