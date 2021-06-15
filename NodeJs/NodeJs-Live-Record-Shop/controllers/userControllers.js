//import db from database 
const db = require("../models/database")
const createError = require("http-errors")

exports.getUsers=(req,res,next)=>{
    let users = db.get("users").value() 
    res.json({success:true, data:users})
}

exports.getSingleUser= (req,res,next)=>{
  
    const {id} = req.params  
    const user= db.get("users").find({id:Number(id)}).value()
    if(user){
       return res.json({success:true, data:user}) 
    }else{
       next(new createError.BadRequest("no such user found in our collection"))
    }  
}

exports.postUser=(req,res,next)=>{
    /*   console.log(req.body)  */
    const {first_name, last_name, email} = req.body
    if(first_name!=="" && last_name!=="" && email !== ""){
            db.get("users").push(req.body).write()
            return res.json({success:true, data:req.body})
    }else{
        next(new createError.BadRequest("please provide with all values"))
    }
  
     
}


exports.patchUser=(req,res)=>{
    const {id} =req.params
    /*   console.log(req.params)
      console.log(req.body) */
      //targeting that specfic user and update avatar property
    db.get("users").find({id:Number(id)}).assign(req.body).write()
  
    //finding updated user in db
      const user = db.get("users").find({id:Number(id)}).value()
      
      res.json({success:true, data:user})
  }


  exports.deleteUser= (req,res)=>{
  
    const {id}=req.params
//deleting specific user from db
    db.get("users").remove({id:Number(id)}).write()


    res.json({success:true, data:"User Deleted"})
}