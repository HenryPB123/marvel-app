/* eslint-disable react/prop-types */
// import React from "react";

const Card = ({ name, image, comics, series }) => {
  return (
    <div
      className="card m-2 bg-dark bg-gradient border-secondary text-white text-center p-2 "
      style={{ width: "15rem" }}
    >
      <h6 className="card-title">{name}</h6>
      <img
        src={image}
        style={{ height: "15rem", width: "14rem" }}
        className="card-img-top"
        alt={name}
      ></img>
      <div className="card-body">
        <p className="card-text border border-2 boder-white rounded-2">
          Comics: {comics}
        </p>
        <p className="card-text border border-2 boder-white rounded-2">
          Series: {series}
        </p>
      </div>
    </div>
  );
};

export default Card;
