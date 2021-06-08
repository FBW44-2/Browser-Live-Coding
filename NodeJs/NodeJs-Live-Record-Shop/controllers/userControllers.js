//import db from database 
const db = require("../modals/database")

exports.getUsers=(req,res,next)=>{
    let users = db.get("users").value() 
    res.json({success:true, data:users})
}

exports.getSingleUser= (req,res)=>{
  
    const {id} = req.params  
    const user= db.get("users").find({id:Number(id)}).value()
    if(user){
       return res.json({success:true, data:user}) 
    }else{
        return res.json({success:false, message:"no such user found in our collection"})
    }  
}

exports.postUser=(req,res)=>{
    /*   console.log(req.body)  */
      db.get("users").push(req.body).write()
      res.json({success:true, data:req.body})
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