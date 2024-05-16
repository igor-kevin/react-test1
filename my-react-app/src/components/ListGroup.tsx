function ListGroup() {
  let items = [
    "São Paulo",
    "Rio de Janeiro",
    "Bahia",
    "Tocantins",
    "Espirito Santo",
  ];
  //   items = [];

  //   const message = items.length === 0 ? <p>Nenhum item na lista.</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>Nenhum item na lista.</p> : null;
  };
  return (
    <>
      <h1>List </h1>
      {getMessage()}
      {items.length === 0 && <p>Nenhum item na lista.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(`Clicked no ${item}`)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
