import "./App.css";
import React from "react";
import Display from "./Display/display";
import useNewsItem from "./CustomHooks/useNewsItem";
import ReactPaginate from "react-paginate";

export default function App() {
  const [, onAction] = useNewsItem();
  const [page, setPage] = React.useState(1);

  const fetchData = React.useCallback(
    async (page) => {
      const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=021d22e0511941c1a2da6ec08f7a965a&pageSize=20&page=${page}`;
      let result = await fetch(url).then((response) => response.json());
      onAction.setData(result.articles);
    },
    [onAction]
  );

  const handlePageClick = (event) => {
    let selectedPage = parseInt(event.selected) + 1;
    setPage(selectedPage);
  };

  React.useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);
  return (
    <>
      <div className="container">
        <Display />
        <Display />
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
}
