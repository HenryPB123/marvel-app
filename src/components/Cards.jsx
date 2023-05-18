// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect } from "react";
import { getCharacters } from "../redux/controllers/characters";

const Cards = () => {
  const { characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  console.log("wwwww", characters);
  return (
    <div className="container">
      {characters &&
        characters.map((character) => {
          return (
            <Card
              key={character.id}
              name={character.name}
              image={character.image}
            ></Card>
          );
        })}
    </div>
  );
};

export default Cards;
