import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import { PokeCard } from "../PokemonCard";
import { Search } from "../Search";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [limitPerPage] = useState(807);
  const [totalPokemon, setTotalPokemon] = useState(12);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getPokemons = async () => {
      await api
        .get(`/?limit=${limitPerPage}`)
        .then((res) => setPokemons(res.data.results));

      setLoading(false);
    };
    getPokemons();
  }, [limitPerPage]);

  const showMoreItems = () => {
    setTotalPokemon((prevValue) => prevValue + 12);
  };

  const renderPokemons = () => {
    const pokemonsList: any = [];

    pokemons.forEach((pokemon: any) => {
      if (!pokemon.name.includes(query)) {
        return;
      }

      pokemonsList.push(<PokeCard key={pokemon.name} pokemon={pokemon} />);
    });

    return pokemonsList;
  };

  return isLoading ? (
    <h1>Carregando...</h1>
  ) : (
    <>
      <div className="flex flex-col">
        <Search query={(q: any) => setQuery(q)} />

        <div className="w-[800px] ml-auto mr-auto">
          <div className="grid grid-cols-4 gap-5 gap-x-20">
            {renderPokemons().slice(0, totalPokemon)}
          </div>
          <div className="w-full flex items-center justify-center pt-5">
            <button
              className="bg-[#BBD0FA] h-12 px-10 text-xl uppercase font-bold rounded-xl cursor-pointer transition hover:scale-110"
              onClick={showMoreItems}
            >
              Carregar mais
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
