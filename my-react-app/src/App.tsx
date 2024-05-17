import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "São Paulo",
    "Rio de Janeiro",
    "Bahia",
    "Tocantins",
    "Espirito Santo",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
