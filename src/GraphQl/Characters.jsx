import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Characters.module.css";
import DisplayCharacter from "./DisplayCharacter";

const AllCharacters = gql`
  query AllCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        favourite @client
        episode {
          id
          name
          air_date
        }
      }
    }
  }
`;

export default function Characters() {
  const [page, setPage] = React.useState(0);
  const { data, loading, error } = useQuery(AllCharacters, {
    variables: { page: page + 1 },
  });

  let display;

  if (loading) {
    display = <h1>Loading</h1>;
  }

  if (error) {
    display = <h1>Error</h1>;
  }

  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  if (data) {
    let content = data.characters.results.map((el, idx) => (
      <DisplayCharacter
        key={el.id}
        image={el.image}
        name={el.name}
        status={el.status}
        episodes={el.episode}
      />
    ));
    display = <div className={styles.characterContent}>{content}</div>;
  }

  return (
    <>
      {display}
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
