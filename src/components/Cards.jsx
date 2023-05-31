// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect, useState } from "react";
// import { getCharacter, getCharacters } from "../redux/controllers/characters";
import { getCharacters } from "../redux/controllers/characters";
import Pagination from "./Pagination";
import CardDetail from "./CardDetail";

const Cards = () => {
  const { characters } = useSelector((state) => state.characters);
  const { character } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [charactersByPage, setCharactersByPage] = useState(4);
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
    <div className="container-fluid mt-4  ">
      {character.length !== 0 ? (
        <div className="row justify-content-between">
          {character &&
            character.map((char) => {
              return (
                <CardDetail
                  key={char.id}
                  id={char.id}
                  image={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                  name={char.name}
                  description={char.description}
                  comics={char.comics.items}
                  series={char.series.items}
                  stories={char.stories.items}
                />
              );
            })}
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-between">
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
            {currentCharacters.length > 3 && (
              <Pagination
                charactersByPage={charactersByPage}
                characters={characters.length}
                pagination={pagination}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
