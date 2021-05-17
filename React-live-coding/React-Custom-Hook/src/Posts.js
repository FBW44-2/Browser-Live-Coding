import React from "react";
import useFetch from "./customHook";

export default function Posts() {

    const [posts,setPosts]=useFetch("https://jsonplaceholder.typicode.com/posts")

  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
