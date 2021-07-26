import Post from "../Post/post";
import useNewsItem from "../CustomHooks/useNewsItem";
import "./display.css";
import { AutoSizer, List } from "react-virtualized";

let id = 0;

export default function Display() {
  const [data] = useNewsItem();
  const ITEMS_COUNT = data.length;
  const content = (
    <div style={{ height: "94vh" }}>
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
  return (
    <div>
      {data.length ? content : <h2 style={{ textAlign: "center" }}>Loading</h2>}
    </div>
  );
}
