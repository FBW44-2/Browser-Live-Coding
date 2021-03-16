/* use methods provided by DOM API
-document.getElementByID(id) single element
-document.getElementsByClassName(class)
html collection
-document.getElementsByTagName(“p”)
-document.getElementsByNames()
-document.querySelector(css selector) first article
-document.querySelectorAll(css selector) collection of articles
 */

 //reference to element
 //target element by ID
 let h1 = document.getElementById("heading")
 h1.style.backgroundColor="blue"
 h1.style.color="white"

 //target elements by classname

 let articles = [...document.getElementsByClassName("article")]//converting htmlCollection into an array
 //if it is collection we dont have any style object
    articles.forEach(article=>{
        article.style.backgroundColor="gray"
        article.style.color="white"
    })

//target elements by tagname

    let paras = Array.from(document.getElementsByTagName("p"))//converting htmlCollection into an array
   paras.map(para=>{
        para.style.padding="10px"
        para.style.border="2px solid black"
    })


    //get element using query selector

    let paragraph = document.querySelector("p")//first paragraph in html
    

    let heading = document.querySelector("#heading")

    let firstArticle = document.querySelector(".article>p")//first p inside the artricle class

    firstArticle.style.boxShadow="10px 6px 5px black"


    let listpara = document.querySelectorAll("p")//returning NodeList (you can only use forEach method with nodelist)
    console.log(listpara)
    listpara.forEach(p=>{
        console.log(p)
    })
  
