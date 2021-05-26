//from Browser we get window host object

/* console.log(window) */


//from node we get global host object

/* console.log(global) */
/* console.log(process) */
/* console.log(__dirname) */ //directory name (absolute path)
/* console.log(__filename) */

/* console.log(module) */

/* console.log(process.argv[2]) */
/* function print(){
    console.log("hello world")
}


if(process.argv[2]==="function"){
    print()
}else{
    console.log("anything else")
}
 */

/*  console.log(process.argv[2]+" "+process.argv[3]) */



//create cli which receives arguments from user and if 3 argumnet is 
//sum concole.log(sum of arg4 and arg5) 
//substract concole.log(difference of arg4 and arg5) 
//multiply concole.log(product of arg4 and arg5) 

/* console.log(process.argv.slice(2)) */

// let arguments = process.argv.slice(2)
/* let array= [20,40,50,60,70]

let [a,...b]=array */

//rest operator
// let [operator, ...numbers ]  = arguments

/* console.log(operator)
console.log(numbers) */

/* Array.reduce(callback,initialvalue) */
/* if(operator==="sum"){
    let total = numbers.reduce((acc,number)=>{
        acc=acc+parseInt(number) 
        return acc
    },0)
    console.log(total)
} */


/* console.log(__dirname)

console.log(process.cwd()) */


/* ECMAscript syntac */

/*  import a ,{sum} from "./index.js"

 console.log(a)

 sum(2,3) */


/*  COMMONJS module syntac */

const a = require("./index")

console.log(a)

/* console.log(module) */