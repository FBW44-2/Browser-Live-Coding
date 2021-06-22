const express = require("express");

const Route = express.Router();
const {auth}= require("../middlewares/Auth")
const {
  getUsers,
  getSingleUser,
  postUser,
  patchUser,
  deleteUser,
  loginUser
} = require("../controllers/userControllers");
//import data from modals
/* const users = require("../modals/data") */
const validateSanitize= require("../middlewares/validation-sanitization")
//CRUD operation
//create
//read
//updated
//delete

//creating routes
//get request for all users

Route.get("/", auth, getUsers);
//route to get a single user
Route.get("/:id",auth,  getSingleUser);
//get post request (create a new user)
/* ABC@GMail.COm => abc@gmail.com */
Route.post(
  "/",
  validateSanitize, 
  postUser
);
Route.post("/login",loginUser)
//get patch request (update)
Route.patch("/:id",auth,  patchUser);
//get delete request (delete)
Route.delete("/:id",auth,  deleteUser);

/* Route.route("/")
.get(getUsers)
.post(postUser);

Route.route("/:id")
.get(getSingleUser)
.patch(patchUser)
.delete(deleteUser); */

module.exports = Route;
