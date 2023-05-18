/* eslint-disable react/prop-types */
// import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="container p-3">
      <div className="row">
        <h2>{name}</h2>
      </div>
      <div className="row mt-2">
        <img
          src={image}
          alt={name}
          style={{ height: "15rem", width: "20rem" }}
        />
      </div>
    </div>
  );
};

export default Card;
