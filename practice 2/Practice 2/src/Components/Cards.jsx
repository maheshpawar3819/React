import React from "react";

const Cards = (props) => {
  const { image, category, title, price, rating } = props?.data;

  return (
    <div className="cards">
      <div className="cards-section">
        <img src={image} alt="" />
        <h3>{category}</h3>
        <h5>{price} $</h5>
        <h6>{title}</h6>
        <h3>{rating.rate}</h3>
      </div>
    </div>
  );
};
export default Cards;
