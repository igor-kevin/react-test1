function ListGroup() {
  let items = [
    "São Paulo",
    "Rio de Janeiro",
    "Bahia",
    "Tocantins",
    "Espirito Santo",
  ];
  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>Lista</h1>
        <p>Sem items.</p>
      </>
    );

  return (
    <>
      <h1>List </h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
