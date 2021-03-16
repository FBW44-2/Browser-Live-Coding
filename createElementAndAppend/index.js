//create element
let h1 = document.createElement("h1")

h1.innerText="Heading"
h1.id="heading"
h1.className="header"
console.log(h1)

//appendChild
//TargetedElement.appendChild(new created element)

/* document.body.appendChild(h1) */

//creating section
let section = document.createElement("section")
section.id="main"
/* let classNames=["dom-article","js-article","react"]  */
for(let i =0 ;i<3;i++){
    let article= document.createElement("article")
    article.className="article"
    let p = document.createElement("p")
    p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente minima quam sequi eos inventore porro nihil nulla repellendus ex eligendi velit minus maxime ratione libero placeat facilis perspiciatis eaque aut, tenetur fugiat architecto error nesciunt. Quis nisi vero facere dicta necessitatibus provident nesciunt in sit eveniet atque excepturi nobis, aliquid labore maiores dolor aut! Temporibus nulla, ipsam quam totam fugiat, praesentium aliquam perferendis debitis accusantium, numquam quod porro pariatur eos sunt quo ex nihil saepe ad hic inventore! Exercitationem voluptas dicta deserunt at maiores voluptatibus cum ex iure, laboriosam, omnis doloribus nulla eligendi repellendus temporibus mollitia qui harum delectus."
    
    console.log(article.classList)
    /* article.classList.add(classNames[i]) */
    /* article.classList.remove("article") */
    /* article.classList.contains("article") */
    article.appendChild(p)
    section.appendChild(article)
}

//final step
/* document.body.appendChild(section) */

let img = document.createElement("img")
img.src= "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
img.width="300"
img.height="300"


/* document.body.appendChild(img) */

document.body.append(h1,section,img)



//how to add and remove attributes in element
//getting attribute
console.log(img.getAttribute("src"))
console.log(img.src)


//setting attribute
img.src="https://www.nhm.ac.uk/content/dam/nhmwww/discover/wpy-2020-winning-images/wpy-winning-image-full-width.jpg" 

img.setAttribute("src","https://www.nhm.ac.uk/content/dam/nhmwww/discover/wpy-2020-winning-images/wpy-winning-image-full-width.jpg")

//remove attribute
/* img.src=""
img.removeAttribute("src") */

/* h1.id="" */
/* h1.removeAttribute("id") */

h1.classList.add("h10") 
console.log(h1.classList.contains("h10"))

/* h1.classList.remove("h10") */

h1.classList.toggle("h10")//it will check if the class is there ,it will remove that class other add that class.

console.log(h1.classList.contains("h10"))