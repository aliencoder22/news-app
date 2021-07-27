import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import ReactPaginate from "react-paginate";

const AllCharacters = gql`
  query AllCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        type
      }
    }
  }
`;

function DisplayCharacter({ image, name, status }) {
  return (
    <div style={{ width: "20rem", margin: "10px" }}>
      <img
        src={image}
        style={{ height: "20rem", width: "20rem" }}
        alt="Nothing"
      />
      <p style={{ textAlign: "center" }}>
        {name}: {status}
      </p>
    </div>
  );
}

export default function Characters() {
  const [page, setPage] = React.useState(1);
  const { data, loading, error } = useQuery(AllCharacters, {
    variables: { page },
  });
  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  let content = data.characters.results.map((el, idx) => (
    <DisplayCharacter
      key={el.id}
      image={el.image}
      name={el.name}
      status={el.status}
    />
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "94vh",
          overflow: "scroll",
        }}
      >
        {content}
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}
      />
    </>
  );
}
