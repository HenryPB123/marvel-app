/* eslint-disable react/prop-types */
// import React from 'react'

const CardDetail = ({ image, name, description, comics, series, stories }) => {
  return (
    <div className="container text-white">
      <img src={image} alt="hero" /> <h1>{name}</h1>
      {description !== "" ? (
        <p>{description}</p>
      ) : (
        <p>No hay una descripción para este personaje</p>
      )}
      <div className="row">
        <div className="col">
          <h2>COMICS</h2>
          <ul className="container">
            {comics && comics.map((comic, i) => <li key={i}>{comic.name}</li>)}{" "}
          </ul>
        </div>
        <div className="col">
          <h2>SERIES</h2>

          <ul className="container">
            {series && series.map((serie, i) => <li key={i}>{serie.name}</li>)}{" "}
          </ul>
        </div>
        <div className="col">
          <h2>STORIES</h2>

          <ul className="container">
            {stories &&
              stories.map((story, i) => <li key={i}>{story.name}</li>)}{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
