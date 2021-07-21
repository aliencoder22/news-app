import React from "react";
import Post from "./Post";
import useNewsItem from "./useNewsItem";
import "./Display.css";

let id = 0;

export default function Display() {
  const [data] = useNewsItem();
  const content = data.map((post, idx) => (
    <Post
      key={id++}
      title={post.title}
      imageUrl={post.urlToImage}
      url={post.url}
      content={post.content}
      description={post.description}
      id={idx}
    />
  ));
  return <div className="content">{data.length ? content : "Loading"}</div>;
}
