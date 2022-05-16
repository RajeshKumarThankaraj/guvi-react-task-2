import React from "react";
import Data from "../cardData";
import Card from "./Card";

const Cards = ({ handleSubmit, handleRemove }) => {
  return (
    <section className="py-5 vh-100 d-flex align-items-center justify-content-center">
      <div className="container mt-3">
        <div className="row m-5">
          {Data.map((cardData) => (
            <Card
              key={cardData.id}
              cardData={cardData}
              handleSubmit={handleSubmit}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
