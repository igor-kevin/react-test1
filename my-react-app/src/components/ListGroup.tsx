import { useState } from "react";

function ListGroup() {
  let items = [
    "São Paulo",
    "Rio de Janeiro",
    "Bahia",
    "Tocantins",
    "Espirito Santo",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p>Nenhum item na lista.</p> : null;
  };

  //event handler

  return (
    <>
      <h1>List </h1>
      {getMessage()}
      {items.length === 0 && <p>Nenhum item na lista.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
