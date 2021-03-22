let form = document.querySelector("form")
let ul = document.querySelector("ul")
console.dir(form)
form.addEventListener("submit",(e)=>{
    //stop default behaviour
    e.preventDefault()
/*     // 1. way to get data from input fields
    let name = document.getElementById("name")
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let image = document.getElementById("image") */
    console.log(form.email.value)
   // 2. way to get data from input fields
  /*  let name = form.name
   let username = form.username
   let email = form.email
   let password = form.password
   let image = form.image */

   //3.FormData

/*    let formData = new FormData(form)
    console.dir(formData) */
   /*  let userData={}
    for(let a of formData){
        userData[a[0]]  =  a[1]
    } */

   /*  console.log(userData) */
 
    let skills= document.querySelectorAll("input[type=checkbox]")//NODELIST
    let userSkills=[]
    skills.forEach(skill=>{
        if(skill.checked){
            userSkills.push(skill.value)
        }
    })
    console.log(userSkills)

    let userData = {
        name:form.name.value ,
        username: form.username.value ,
        email:form.email.value , 
        password:form.password.value ,
        image:form.image.value.replace("C:\\fakepath\\","./images/") ,
        skills: userSkills.join(", ")
    }

    //create profile card
    let card = document.createElement("div")
    card.style.width="300px"
    card.style.height="500px"

    let h2= document.createElement("h2")
    /* h2.innerText= form.name.value */
    h2.innerText= userData.name

    let h3= document.createElement("h3")
    h3.innerText= userData.username
    let p= document.createElement("p")
    p.innerText= userData.email

    let h4= document.createElement("h4")
    h4.innerText= userData.skills
    let img= document.createElement("img")

    img.src=userData.image
    img.width="300"
    img.height="350"
    //append all elements into card
    card.append(h2,h3,p,h4,img)

    //append this card into document
    ul.appendChild(card)

})