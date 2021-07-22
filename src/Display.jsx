import React from "react";
import Post from "./Post";
import useNewsItem from "./useNewsItem";
import "./Display.css";
import { AutoSizer, List } from "react-virtualized";

let id = 0;

export default function Display() {
  const [data] = useNewsItem();
  const ITEMS_COUNT = data.length;
  const content = (
    <div style={{ height: "100vh" }}>
      <AutoSizer>
        {({ height, width }) => {
          const itemsPerRow = 2;
          const rowCount = Math.ceil(ITEMS_COUNT / itemsPerRow);

          return (
            <List
              width={width}
              height={height}
              rowCount={rowCount}
              rowHeight={400}
              rowRenderer={({ index, key, style }) => {
                const items = [];
                const fromIndex = index * itemsPerRow;
                const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);

                for (let i = fromIndex; i < toIndex; i++) {
                  const post = data[i];
                  items.push(
                    <Post
                      key={id++}
                      title={post.title}
                      imageUrl={post.urlToImage}
                      url={post.url}
                      content={post.content}
                      description={post.description}
                      id={i}
                    />
                  );
                }

                return (
                  <div className="Row" key={key} style={style}>
                    {items}
                  </div>
                );
              }}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
  return <div>{data.length ? content : "Loading"}</div>;
}
