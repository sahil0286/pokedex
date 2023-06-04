import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

const Main = (totalCard) => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/pokemon?limit=${totalCard}`);
    // eslint-disable-next-line
  }, []);

  const fetchPokemons = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      const pokemonResults = data.results;

      const fetchedPokemons = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const pokemonData = await res.json();
          return pokemonData;
        })
      );





  return (
    <>
      
    </>
  );
};

export default Main;