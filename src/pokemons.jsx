import { Pokemon } from "./pokemon";
import { dataContext } from "./App"
import { useContext, useEffect, useState} from "react"
import { useFetch } from "./usefetch";
import './pokemons.css'
export const Pokemons = () => {
  const data = useContext(dataContext);
  useEffect(() => {
    const pokemonsData = async() => {
      const promises = data.data.results.map(async(pokemon)=> {
        return useFetch(pokemon.url);
      });
    const response = await Promise.all(promises);
    data.addPokemons(response);
    data.changeData(response);
  };
    data.data ? pokemonsData() : null;
  }, [data.data]);
  const pokemonsContainer =  (
    <div className="pokemonsContainer">
      {data.filterData!== undefined ? data.filterData.map((pokemon) => {
        return <Pokemon key={pokemon.id} pokemonData={pokemon}></Pokemon>
      }) :null}
    </div> );
  return (
    data.filterData===undefined ? <div className="loader">loading.......</div> :pokemonsContainer
  );
};