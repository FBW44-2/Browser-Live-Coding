const express =require("express")
const port = 3000;

//create a server // initialize express
const server = express()
const path =require("path")
server.use("/public", express.static(path.join(__dirname,"/static/public")));

//Routes , Endpoint
server.get("/",(req,res)=>{
    res.sendFile(__dirname+"/http-server/index.html")

  /*   res.status(200).sendFile(__dirname+"/http-server/index.html") */
})

//Routes , Endpoint
server.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/http-server/About.html")
})

//Routes , Endpoint
server.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/http-server/Contact.html")
})

/* server.get("*",(req,res)=>{
    res.send({error:"page not found",status:404})
})
 */
//res.sendFile (send file from server)
//res.send  (send response ,string,number,obj)
//res.json( )

server.listen(port, ()=>console.log("express server running"))