const express=require("express")
const Route = express.Router()
const data =require("../modals/data")

Route.get("/",(req,res)=>{
    res.render("index",data)
})


Route.get("/login",(req,res)=>{
    res.render("login")
})

Route.post("/login",(req,res)=>{

})



module.exports= Route