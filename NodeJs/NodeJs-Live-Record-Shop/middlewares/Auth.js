const jwt = require("jsonwebtoken")

exports.auth=(req,res,next)=>{

    const token = req.header("auth-token")
    const decodedToken = jwt.verify(token, "secretkeyfromnaqvi")
    console.log(decodedToken)
    if(decodedToken){
        next()
    }else{
        next(new Error("authorized user"))
    }

}