import "./App.css";

function Truckstop({
  name,
  location,
  rating,
}: {
  name: string;
  location: string;
  rating: number;
}) {
  return (
    <p>
      {name} located in {location} has a rating of {rating}
    </p>
  );
}

function App() {
  return (
    <>
      <h1>Truck Stops</h1>
      <Truckstop name="Flying J" location="Mississuaga(ON)" rating={4.5} />
      <Truckstop name="Petro Pass" location="Nipigon(ON)" rating={4.0} />
      <Truckstop name="Husky/Esso" location="Dryden(ON)" rating={2.0} />
      <Truckstop name="Flying J" location="Regina(SK)" rating={3.5} />
    </>
  );
}

export default App;
