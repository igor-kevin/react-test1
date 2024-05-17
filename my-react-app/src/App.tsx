import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "São Paulo",
    "Rio de Janeiro",
    "Bahia",
    "Tocantins",
    "Espirito Santo",
  ];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
