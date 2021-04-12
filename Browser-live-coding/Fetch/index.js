console.log("start")

fetch("https://jsonplaceholder.typicode.com/posts")
.then(data=>data.json()) //JSON.parse() will not work in asychronous
.then(result=>{
    let ul = document.querySelector("ul")

    result.forEach(post=>{
        let li = document.createElement("li")
        li.innerText=  post.title
        ul.appendChild(li)
    })
   
})
.catch(err=>console.log(err))



console.log("end")