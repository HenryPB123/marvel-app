/* eslint-disable react/prop-types */
// import React from "react";

const Card = ({ name, image, comics, series }) => {
  return (
    <div
      className="card m-2  bg-gradient border-secondary text-white text-center p-2  "
      style={{
        width: "15rem",
        backgroundColor: "#0d0d12",
        color: "white",
        border: "solid 2px #052238",
      }}
    >
      <h6 className="card-title mt-1 mb-2">{name}</h6>
      <img
        src={image}
        style={{ height: "15rem", width: "14rem" }}
        className="card-img-top mt-2"
        alt={name}
      ></img>
      <div className="card-body">
        <p className="card-text border border boder-secondary rounded">
          Comics: {comics}
        </p>
        <p className="card-text border border boder-secondary rounded">
          Series: {series}
        </p>
      </div>
    </div>
  );
};

export default Card;
