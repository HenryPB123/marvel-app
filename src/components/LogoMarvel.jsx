// import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCharacters } from "../redux/controllers/characters";
import "./styles/logoMarvel.css";

const LogoMarvel = () => {
  const { characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="container justify-content-between   d-flex flex-row bd-highlight ml-0 align-middle">
      <div
        className="row align-items-center justify-content-around"
        style={{ width: "70%" }}
      >
        <div className="col ">
          <img
            className="m-2"
            src="https://movie-fanatic-res.cloudinary.com/iu/s---cZThGjz--/f_auto,q_auto/v1405102365/marvel-studios-movie-logo"
            alt="marvelLogo"
            style={{ height: "6rem", width: "15rem" }}
          />
        </div>
        <div className="col m-4 align-middle">
          <h3>Home</h3>
        </div>
        <div className="col m-4 align-middle">
          <select className="form-select bg-dark border-0  text-white form-select-lg mb-3">
            <option value="">Personajes</option>
            {characters &&
              characters.map((character) => {
                return <option key={character.id}>{character.name}</option>;
              })}
          </select>
        </div>
      </div>
      <div className="row  align-items-center ">
        <div className="col">
          <span className="material-symbols-outlined notif">notifications</span>
        </div>

        <div className="col">
          <span className="material-symbols-outlined notif">settings</span>
        </div>
      </div>
    </div>
  );
};

export default LogoMarvel;
