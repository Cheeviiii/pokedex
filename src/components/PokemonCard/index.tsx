import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./styles";

export const PokeCard = ({ pokemon }: any) => {
  const [imagePokemon, setPokemonImage] = useState("");
  const [pokemonID, setPokemonID] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const LoadPokemon = async () => {
      await axios.get(pokemon.url).then((res) => {
        setPokemonID(res.data.id);
        setPokemonImage(res.data.sprites.other.dream_world.front_default);
        setPokemonTypes(res.data.types);
      });
    };

    LoadPokemon();

    setLoading(false);
  }, [pokemon.url, pokemonID]);

  const pokemonType = pokemonTypes.map(
    (type: any) => type.type.name[0].toUpperCase() + type.type.name.slice(1)
  );

  if (isLoading) {
    return (
      <h1 className="text-center text-xl font-medium">
        Carregando Pokemons...
      </h1>
    );
  } else {
    return (
      <div className="bg-white w-[200px] h-[250px] flex flex-col items-center justify-center rounded-3xl hover:scale-110 transition cursor-pointer">
        <Card className={pokemonType[0]}>
          <img className="w-32 h-32 ml-auto mr-auto" src={imagePokemon} />
        </Card>
        <div className="flex flex-col items-start justify-center pt-5">
          <p className="font-medium">#0{pokemonID}</p>
          <h1 className="text-center font-bold text-xl uppercase">
            {pokemon.name}
          </h1>
          {/* <p className="text-center">{pokemonType[0]}</p> */}
        </div>
      </div>
    );
  }
};
