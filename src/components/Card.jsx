/* eslint-disable react/prop-types */
// import React from "react";
import "./styles/card.css";

const Card = ({ name, image, comics, series }) => {
  return (
    <div className="card_p card m-2  bg-gradient border-0 text-white   text-center p-2  ">
      <img
        src={image}
        style={{ height: "15rem", width: "14rem" }}
        className="card-img-top "
        alt={name}
      ></img>
      <h6 className="card-title fw-bolder mt-3 mb-1 bg-gradient">{name}</h6>
      <div className="card-body">
        <p className="card-text rounded bg-gradient">Comics: {comics}</p>
        <p className="card-text  rounded bg-gradient">Series: {series}</p>
      </div>
    </div>
  );
};

export default Card;
