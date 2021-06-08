const express=require("express")
const logger = require("morgan")
const port = 3000;
const userRoutes= require("./routes/userRoutes")

//create express server
const app = express()

//express middleware
//parsing req.body
app.use(express.json())

//external middleware
/* app.use(logger("combined")) */

//custom  middleware
function printTime(req,res,next){
    console.log("time: ",new Date())
    next()
}

function clgValue(req,res,next){
    console.log("Method: ", req.method)
    console.log("url: ", req.url)
    next()
}

app.use(printTime)
app.use(clgValue)

app.use("/users",userRoutes)







app.listen(port, ()=>console.log("express server is running on port: ",port))