import axios from "axios";

const pad = (number: any, length: any) => {
  let str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};

export const getPokemonImageUrl = (id: any) =>
  `/thumbnails=compressed/${pad(id, 3)}.png`;

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});
