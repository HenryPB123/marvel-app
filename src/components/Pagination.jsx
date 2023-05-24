/* eslint-disable react/prop-types */
// import React from "react";

import { useState } from "react";

const Pagination = ({
  charactersByPage,
  characters,
  pagination,
  currentPage,
}) => {
  const pageNumbers = [];
  const [num, setNum] = useState(2);

  for (let i = 1; i <= Math.ceil(characters / charactersByPage); i++) {
    pageNumbers.push(i);
  }
  const previousPage = () => {
    if (num > 1) setNum(num - 1);
    pagination(num);
  };

  const nextPage = () => {
    if (num < pageNumbers.length) setNum(num + 1);
    pagination(num);
  };

  return (
    <div className="text-center ">
      <button
        className="btn btn-black bg-gradient border border-secondary m-3 text-white"
        onClick={() => previousPage()}
      >
        <span className="material-symbols-outlined">
          keyboard_double_arrow_left
        </span>
      </button>
      {pageNumbers &&
        pageNumbers.map((number) => {
          return (
            <button
              className="btn btn-black bg-gradient border border-secondary m-3 text-white"
              key={number}
              onClick={() => {
                setNum(number);
                pagination(number);
              }}
              style={
                number === currentPage
                  ? {
                      backgroundColor: "#1b144c",
                      color: "white",
                      border: "solid 2px #052238",
                    }
                  : {}
              }
            >
              {number}
            </button>
          );
        })}
      <button
        className="btn btn-black bg-gradient border border-secondary m-3 text-white"
        onClick={() => nextPage()}
      >
        <span className="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
      </button>
    </div>
  );
};

export default Pagination;
