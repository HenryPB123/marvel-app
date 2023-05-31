/* eslint-disable react/prop-types */
// import React from 'react'

const CardDetail = ({ image, name, description, comics, series, stories }) => {
  return (
    <div className="container text-white text-center">
      <div className="row mb-4 justify-content-center  align-items-center">
        <div className="col">
          <img
            className="rounded border border-dark"
            src={image}
            alt="hero"
            style={{ height: "100%", width: "70%" }}
          />
        </div>
        <div className="col text-start   ">
          <h1 className="mb-3">{name}</h1>
          {description !== "" ? (
            <p className="mb-3">{description}</p>
          ) : (
            <p className="mb-3">No hay una descripción para este personaje</p>
          )}
        </div>
      </div>

      <div className="row text-center ms-5 ps-5">
        <div className="col text-start">
          <h2 className="text-center m-3">COMICS</h2>
          <ul className="container">
            {comics.length !== 0 ? (
              comics.map((comic, i) => <li key={i}>{comic.name}</li>)
            ) : (
              <p>Este personaje no tiene comics.</p>
            )}
          </ul>
        </div>
        <div className="col text-start ">
          <h2 className="text-center m-3">SERIES</h2>

          <ul className="container">
            {series.length !== 0 ? (
              series.map((serie, i) => <li key={i}>{serie.name}</li>)
            ) : (
              <p>Este personaje no tiene series.</p>
            )}
          </ul>
        </div>
        <div className="col text-start">
          <h2 className="text-center m-3">STORIES</h2>

          <ul className="container">
            {stories.length !== 0 ? (
              stories.map((story, i) => <li key={i}>{story.name}</li>)
            ) : (
              <p>Este personaje no tiene stories.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
