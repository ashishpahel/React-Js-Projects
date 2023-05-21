import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  return (

    // container
    <div className="container">

    {/* title of page  */}
      <div>
        <h2 className="title"> Plan With Mr.Robot</h2>
      </div>

      {/* all card use the map function  */}
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
};

export default Tours;
