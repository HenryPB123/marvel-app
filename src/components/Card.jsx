/* eslint-disable react/prop-types */
// import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="container">
      <div className="row">{name}</div>
      <div className="row">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Card;
