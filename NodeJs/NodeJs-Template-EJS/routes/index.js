const express = require("express");
const Route = express.Router();
const data = require("../modals/data");
const {getHome,getLogin,getProfile,getSignup,postLogin} = require("../controllers/mainControllers")

//Home page
Route.get("/",getHome);

// login page
Route.get("/login",getLogin );

//post login request
Route.post("/login",postLogin);

//signup page
Route.get("/signup", getSignup);

//profile page
//protected route
Route.get("/profile",getProfile);


module.exports = Route;
