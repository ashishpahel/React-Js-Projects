import React from "react";
import data from "./Data";
import { useState } from "react";
import Tours from "./components/Tours";

const App = () => {

  // use the useState hook 
  const [tours, setTours] = useState(data);

  // function for remove tour when user click on not interested button
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  // when there is no tour left on screen and when user click on refresh button then all tour again visible on screen
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  // else this will execute
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
