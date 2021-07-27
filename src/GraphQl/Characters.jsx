import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import ReactPaginate from "react-paginate";
import "./Characters.css";

const AllCharacters = gql`
  query AllCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        episode {
          id
          name
          air_date
        }
      }
    }
  }
`;

function Modal({ show, onClose, name, episodes }) {
  if (!show) {
    return null;
  }

  let content = episodes.map((el) => (
    <li>
      {el.name} : {el.air_date}
    </li>
  ));

  return (
    <div className="modal">
      <div className="modal-content">
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          Episodes of {name}
        </div>
        <ul>{content}</ul>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button style={{ color: "black" }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function DisplayCharacter({ image, name, status, episodes }) {
  const [show, setShow] = React.useState(false);
  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div style={{ width: "20rem", margin: "10px" }}>
        <img
          src={image}
          style={{ height: "20rem", width: "20rem" }}
          alt="Nothing"
        />
        <p style={{ textAlign: "center" }}>
          {name}: {status}
        </p>
        <div style={{ textAlign: "center" }}>
          <button style={{ color: "black" }} onClick={() => setShow(true)}>
            Show Episodes
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onClose={onClose}
        name={name}
        episodes={episodes.slice(0, 5)}
      />
    </>
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
      episodes={el.episode}
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
