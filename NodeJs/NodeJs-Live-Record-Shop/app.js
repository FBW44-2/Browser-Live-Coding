const express=require("express")
const logger = require("morgan")
const port = 3000;

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




let users=[
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
    {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg"
    },
    {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg"
    }
    ]
//CRUD operation
//create
//read
//updated
//delete

//creating routes
//get request for all users 

    app.get("/users",(req,res,next)=>{
        
        res.json({success:true, data:users})
    })

 

  
   //route to get a single user 
    app.get("/users/:id",(req,res)=>{
      
        const {id} = req.params  
        const user= users.find(item=>item.id === Number(id) )
        if(user){
           return res.json({success:true, data:user}) 
        }else{
            return res.json({success:false, message:"no such user found in our collection"})
        }  
    })


    //get post request (create a new user)
    app.post("/users",(req,res)=>{
     
         /*   console.log(req.body)  */
           users.push(req.body)
           res.json({success:true, data:req.body})
    })

    //get patch request (update)
    
    app.patch("/users/:id",(req,res)=>{
      
      /*   console.log(req.params)
        console.log(req.body) */
        //targeting that specfic user 
        const user=users.find(item=>item.id===Number(req.params.id))
        user.id=req.body.id
        res.json({success:true, data:user})
    })

    //get delete request (delete)
    app.delete("/users/:id",(req,res)=>{
      
        users  = users.filter(item=>item.id!== Number(req.params.id))
        res.json({success:true, data:"User Deleted"})
    })

   




app.listen(port, ()=>console.log("express server is running on port: ",port))