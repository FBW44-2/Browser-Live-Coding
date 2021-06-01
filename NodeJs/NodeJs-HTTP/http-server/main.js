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
    console.log("received request method is  ", req.method)
    //read html file using fs module
    let htmlData = fs.readFileSync("./index.html")
    let contactData =fs.readFileSync("./Contact.html")
    let aboutData =fs.readFileSync("./About.html")

    if(req.url==="/"){
         // send back response to client  
    res.write(htmlData) 
    }else if(req.url==="/about"){
        res.write(aboutData)
    }else if(req.url==="/contact"){
        res.write(contactData)
    }
    else{
        res.writeHead(403)
        res.write("Page not Found")
    }
    //ending your response cycle.
    res.end()
} )

//activate server/ server listening  Incoming requests from client on port 3000
server.listen(port,()=>console.log("server starts running"))