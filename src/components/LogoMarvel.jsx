// import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/controllers/characters";

const LogoMarvel = () => {
  const { characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNP_tur6G4IJhf5Z3yaVxSGe1LTCb8oIu8Q&usqp=CAU"
            alt="marvelLogo"
          />
        </div>
        <div className="col-3 mt-5">
          <h2>Home</h2>
        </div>
        <div className="col-3 mt-5">
          <select>
            <option value="">Personajes</option>
            {characters &&
              characters.map((character) => {
                return <option key={character.id}>{character.name}</option>;
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LogoMarvel;
