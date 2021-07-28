import React from "react";
import Modal from "./Modal";

export default function DisplayCharacter({ image, name, status, episodes }) {
  const [show, setShow] = React.useState(false);
  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div style={{ width: "15rem", margin: "10px" }}>
        <img
          src={image}
          style={{ height: "15rem", width: "15rem" }}
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
