const express=require("express")
const Route = express.Router()
const data =require("../modals/data")

//Home page
Route.get("/",(req,res)=>{
    res.render("index",data)
})

// login page
Route.get("/login",(req,res)=>{
    res.render("login",data)
})

//signup page
Route.get("/signup",(req,res)=>{
    res.render("signup",data)
})

//profile page
Route.get("/profile",(req,res)=>{
    res.render("profile",data)
})


module.exports= Route