const directoryExists= require("directory-exists")

const [ targatedDirectory ] = process.argv.slice(2)


directoryExists(targatedDirectory+"/.git",(error,result)=>{
        if(result){
            console.log("this is git repository")
        }else{
            console.log("no repo")
        }
})


