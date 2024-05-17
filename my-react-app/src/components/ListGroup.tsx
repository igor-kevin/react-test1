import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup(props: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return props.items.length === 0 ? <p>Nenhum item na lista.</p> : null;
  };

  //event handler

  return (
    <>
      <h1>{props.heading} </h1>
      {getMessage()}
      {props.items.length === 0 && <p>Nenhum item na lista.</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
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
