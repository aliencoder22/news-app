import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

let id = 0;

export default function Display() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=ad23c45e8dbf4c418fc72871384d9ec5";
      let result = await fetch(url).then((response) => response.json());
      dispatch({ type: "SET_DATA", value: result.articles });
    };
    fetchData();
  }, [dispatch]);

  const content = data.map((post, idx) => (
    <Post
      key={id++}
      title={post.title}
      imageUrl={post.urlToImage}
      url={post.url}
      content={post.content}
      description={post.description}
    />
  ));
  return <div className="content">{data.length ? content : "Loading"}</div>;
}
