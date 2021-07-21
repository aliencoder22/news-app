import "./App.css";
import React from "react";
import Display from "./Display";
import useNewsItem from "./useNewsItem";

export default function App() {
  const [, onAction] = useNewsItem();

  React.useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=ad23c45e8dbf4c418fc72871384d9ec5";
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
