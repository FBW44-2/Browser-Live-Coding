import React from "react"
import image1 from "./images/1.png"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"
import "./Article.css"


function Article(){
    let articleData=[
        {text:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",url:image1 },
        {text:"Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",url:image2},
        {text:"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",url:image3}
    ]
    let allArticles = articleData.map(article=>{
        return(
            <article className="article" style={{width:"300px"}}>
                <p>{article.text}</p>
                <img src={article.url} width="300" alt=""/>
            </article>
        )
    })



    return(
       <div style={{display:"flex"}}>
           {allArticles}
       </div>
    )
}

export default Article;
