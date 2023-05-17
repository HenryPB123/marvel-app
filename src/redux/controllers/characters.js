/* eslint-disable no-unused-vars */
import axios from "axios";
import { setCharacters } from "../slices/slice";

export const getCharacters = () => {
  return (dispatch) => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1fd8623e306c639e6d696bd43bfce517&hash=361fc32da3b7eb20c46f7270d41071ef`
      )
      .then((response) => {
        dispatch(setCharacters(response.data.data.results));
      })
      .catch((e) => console.log(e));
  };
};
