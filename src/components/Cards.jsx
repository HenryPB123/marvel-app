// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getCharacters } from "../redux/controllers/characters";
import Pagination from "./Pagination";

const Cards = () => {
  const { characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  console.log("wwwww", characters);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [charactersByPage, setCharactersByPage] = useState(5);
  const indexOfLastCharacter = currentPage * charactersByPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersByPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );
  function pagination(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="container">
      <div className="row">
        {currentCharacters &&
          currentCharacters.map((character) => {
            return (
              <Card
                key={character.id}
                name={character.name}
                image={character.image}
                comics={character.comics}
                series={character.series}
              ></Card>
            );
          })}
      </div>
      <div className="row">
        {currentCharacters.length > 4 && (
          <Pagination
            charactersByPage={charactersByPage}
            characters={characters.length}
            pagination={pagination}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Cards;
