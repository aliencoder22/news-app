import "./App.css";
import React from "react";
import Display from "./Display";
import useNewsItem from "./useNewsItem";

export default function App() {
  const [, onAction] = useNewsItem();

  React.useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=021d22e0511941c1a2da6ec08f7a965a";
      let result = await fetch(url).then((response) => response.json());
      onAction.setData(result.articles);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <Display />
      <Display />
    </div>
  );
}
