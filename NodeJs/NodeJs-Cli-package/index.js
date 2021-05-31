#!/usr/bin/env node

//shebang

const Axios = require("axios")

const [number=5]=process.argv.slice(2)

Axios.get("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    response.data.slice(0,Number(number)).map(user=>{
        console.log( `
        ********************** 
        Name: ${user.name}
        UserEmail: ${user.email}

        ***********************`)
    })
}
)
