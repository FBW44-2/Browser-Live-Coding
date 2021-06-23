//import db from database
const UsersModel = require("../models/UserSchema");
const createError = require("http-errors");
const bcrypt = require("bcrypt")
//bcrypt.hashSync(password,salt) create hash password
//bcrypt.compareSync(password,hashedpassword) 
const jwt = require("jsonwebtoken")
//jwt.sign(payload, secretKey) create token
//jwt.verify(token, secretKey) verify token

exports.getUsers = async (req, res, next) => {
  try {
         //get all users from users collection
    let users = await UsersModel.find({});
    res.json({ success: true, data: users });
 
   
  } catch (err) {
    next(err);
  }
};

exports.getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    //get a single user from users collection
    const user = await UsersModel.findById(id).select("-__v -password -id");
    /* console.log(user.firstname + " " + user.lastname) */
    user.fullname="Naqvi Ali"
    await user.save();
    console.log(user)
    if (user) {
      return res.json({ success: true, data: user });
    } else {
      next(new createError.BadRequest("no such user found in our collection"));
    }
  } catch (err) {
    next(err);
  }
};

//signup
exports.postUser = async (req, res, next) => {
//add new user into our users collection
try{
  //hash password
/*   let salt = bcrypt.genSaltSync(10) */
/*   console.log(salt) */
 /*  let hashedPassword= bcrypt.hashSync(req.body.password,salt) */
 /*  console.log(hashedPassword) */

  const user = new UsersModel(req.body)
  await user.save()
  res.send({success:true, data:user})
}
catch(err){
  console.log(err.message)
  next(err)
}
 
};

exports.patchUser = async (req, res, next) => {

    try{
        const {id} =req.params
        //update user in our users collection
        const user = await UsersModel.findByIdAndUpdate(id, req.body, {new:true})
        res.send({success:true, data:user})

    }
    catch(err){
        next(err)
    }
};

exports.deleteUser = async (req, res, next) => {
    try{
        const {id}= req.params
        const user = await UsersModel.findByIdAndDelete(id)
        res.send({success:true, data:user})
    }
    catch(err){
        next(err)
    }
};

// /users/login POST email, password=123456
exports.loginUser=async (req,res,next)=>{
  try{
    const user = await UsersModel.findOne({email:req.body.email})
    if(!user){
      next(new createError.NotFound("No such user found in DB"))
    }else{
      //compare password and hash password
      let check = bcrypt.compareSync(req.body.password,user.password)

      if(!check) {
        next(new createError.NotFound("password doesn't match"))
      }else{
        const token = jwt.sign({id:user._id,email:user.email} , "secretkeyfromnaqvi")
        res.header("x-auth",token)
      /*   res.cookie("x-auth",token) */
        res.send({success:true, data:user})
      }
      
    }
  }catch(err){
    next(err)
  }
  
}