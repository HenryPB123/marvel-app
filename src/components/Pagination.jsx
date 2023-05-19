/* eslint-disable react/prop-types */
// import React from "react";

const Pagination = ({
  charactersByPage,
  characters,
  pagination,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(characters / charactersByPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="text-center ">
      {pageNumbers &&
        pageNumbers.map((number) => {
          return (
            <button
              className="btn btn-dark m-3 text-white"
              key={number}
              onClick={() => pagination(number)}
              style={
                number === currentPage
                  ? {
                      backgroundColor: "#1d1a19",
                      color: "white",
                      border: "solid 2px #004e89",
                    }
                  : {}
              }
            >
              {number}
            </button>
          );
        })}
    </div>
  );
};

export default Pagination;
