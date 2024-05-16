function ListGroup() {
  const items = [
    "São Paulo",
    "Rio de Janeiro",
    "Bahia",
    "Tocantins",
    "Espirito Santo",
  ];

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
