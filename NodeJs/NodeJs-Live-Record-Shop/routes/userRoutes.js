const express =require("express")

const Route = express.Router()

//import data from modals
/* const users = require("../modals/data") */


//import db from database 
const db = require("../modals/database")
//CRUD operation
//create
//read
//updated
//delete

//creating routes
//get request for all users 

Route.get("/",(req,res,next)=>{
    let users = db.get("users").value() 
    res.json({success:true, data:users})
})





//route to get a single user 
Route.get("/:id",(req,res)=>{
  
    const {id} = req.params  
    const user= db.get("users").find({id:Number(id)}).value()
    if(user){
       return res.json({success:true, data:user}) 
    }else{
        return res.json({success:false, message:"no such user found in our collection"})
    }  
})


//get post request (create a new user)
Route.post("/",(req,res)=>{
     /*   console.log(req.body)  */
       db.get("users").push(req.body).write()
       res.json({success:true, data:req.body})
})

//get patch request (update)

Route.patch("/:id",(req,res)=>{
  
  /*   console.log(req.params)
    console.log(req.body) */
    //targeting that specfic user 
    const user=users.find(item=>item.id===Number(req.params.id))
    user.id=req.body.id
    res.json({success:true, data:user})
})

//get delete request (delete)
Route.delete("/:id",(req,res)=>{
  
    users  = users.filter(item=>item.id!== Number(req.params.id))
    res.json({success:true, data:"User Deleted"})
})







module.exports=Route;