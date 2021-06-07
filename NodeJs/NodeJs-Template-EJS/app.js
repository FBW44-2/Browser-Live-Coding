const express =require("express")
const app = express()
const Route =require("./routes/index") 
const PORT = 3000;
//set template engine for express
app.set("view engine","ejs")

//middleware to serve static files
app.use(express.static(__dirname+"/views")) 




app.use(Route)


app.listen(PORT,()=>console.log("server is running on port : ",PORT))