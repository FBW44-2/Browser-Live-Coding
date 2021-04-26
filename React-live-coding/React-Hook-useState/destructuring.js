
let array=[1,"anyName",function(){console.log("hello world")},true]
let [number,string,printFunc,booleanValue] = array

console.log(number)
console.log(string)
printFunc()

let obj={name:"Dave",age:23,details:{className:"fbw44",TeacherName:"Naqvi"}}

let {name,age} = obj

console.log(name)
console.log(age)

let {TeacherName,className}=obj.details

console.log(TeacherName)
console.log(className)