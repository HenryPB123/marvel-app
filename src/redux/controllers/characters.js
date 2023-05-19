/* eslint-disable no-unused-vars */
import axios from "axios";
import { setCharacters } from "../slices/slice";

export const getCharacters = () => {
  return (dispatch) => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1fd8623e306c639e6d696bd43bfce517&hash=361fc32da3b7eb20c46f7270d41071ef`
      )
      .then((response) => {
        response = response.data.data.results;

        let results = [];
        response.map((character) =>
          results.push({
            id: character.id,
            name: character.name,
            image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            comics: character.comics.available,
            series: character.series.available,
          })
        );

        dispatch(setCharacters(results));
      })
      .catch((e) => console.log(e));
  };
};
