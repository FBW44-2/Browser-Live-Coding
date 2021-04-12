let data=[
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


    data.map(userData=>{
        let card = document.createElement("div")
        card.style.width="300px"
        let h2= document.createElement("h2")
        h2.innerText=userData.first_name+ " "+userData.last_name
        let p= document.createElement("p")
        p.innerText=userData.email
        let img = document.createElement("img")
        /* img.src = userData.avatar */
       /*  img.width="280" */
        /* img.alt= "user image" */
        img.setAttribute("src",userData.avatar)
        img.setAttribute("width","280")
        img.setAttribute("alt","user image")

        img.getAttribute("width") // returns you value of that attribute => 280
       
        card.append(h2,p,img)
        document.body.appendChild(card)
    })
