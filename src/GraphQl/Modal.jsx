export default function Modal({ show, onClose, name, episodes }) {
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
