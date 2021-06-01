const http = require("http")
const fs = require("fs")
const port = 3000;
//creating server
/* const server = http.createServer( (req,res)=>{

    // send back response to client  
    res.write("hello from server")
    //ending your response cycle.
    res.end()
} ) */
//reading and sending html page
const server = http.createServer( (req,res)=>{

    //read html file using fs module
    let htmlData = fs.readFileSync("./index.html")
    // send back response to client  
    res.write(htmlData)
    //ending your response cycle.
    res.end()
} )

//activate server/ server listening  Incoming requests from client on port 3000
server.listen(port,()=>console.log("server starts running"))