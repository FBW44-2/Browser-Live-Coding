// File system module in NODEJS


const fs =require("fs")


//create directory

// fs.mkdir(__dirname+"/folder", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("directory created")
//     }
// }) //asynchronous code

// fs.mkdirSync(__dirname+"/folder")

//create a file inside folder directory
//crate file and write data into it.
// fs.writeFile(__dirname+"/folder/text.txt", "Hi friends, new file created",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created and data added")
//     }
// })

//fs.writeFileSync(__dirname+"/folder/text.txt", "Changed data ,more data ")


//append data into file or add more data into your file
// fs.appendFile(__dirname+"/folder/text.txt", "Hi friends, new file created",(err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log("data added")
//         }
//     })



//read file data 

// fs.readFile(__dirname+"/data.json","utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

{/* <Buffer 5b 0a 20 20 7b 0a 20 20 20 20 22 74 69 74 6c 65 22 3a 20 22 31 30 30 22 2c 0a 20 20 20 20 22 73 79 6d 62 6f 6c 22 3a 20 22 f0 9f 92 af 22 2c 0a 20 20 ... 200632 more bytes> */}

//delete file
// fs.unlink(__dirname+"/folder/text.txt",(err)=>{ 
//     if(err){
//        console.log(err)  
//     }else{
//         console.log("file deleted from system")
//     }
   
// })

const readStr = fs.createReadStream(__dirname+"/folder/text.txt")
const writeStr=fs.createWriteStream(__dirname+"/folder/copytext.txt")

/* readStr.on("data",(data)=>{
    console.log("page read")
    writeStr.write(data,(err)=>{
        if(err){
            console.log(err)
        }
    })
}) */

readStr.pipe(writeStr)

