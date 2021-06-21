
const { check ,body,validationResult} = require("express-validator");

let validateSanitize= [  check("email").isEmail().normalizeEmail().withMessage("email invalid syntax"),
check("password")
  .isLength({ min: 3 })
  .withMessage("password is too short, minimum 3 characters"),
check("firstname").exists().trim().escape().withMessage("please provide valid name") ,
(req,res,next)=>{
    console.log("I am last in validation")
    const result= validationResult(req)
    if(result.isEmpty()){
        next()
    }else{
    
        next(result.errors)
    }
    
}
] 

module.exports= validateSanitize


