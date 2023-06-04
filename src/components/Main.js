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

      setPokemons((prevPokemons) => {
        const allPokemons = [...prevPokemons, ...fetchedPokemons];
        const uniquePokemons = [...new Map(allPokemons.map((pokemon) => [pokemon.id, pokemon])).values()];
        return uniquePokemons;
      });

      setNextUrl(data.next);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      setIsLoading(false);
    }
  };



  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = filterType === '' || pokemon.types.some((type) => type.type.name === filterType);
    return nameMatch && typeMatch;
  });

  return (
    <>
      <div className="app-container mb-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12 text-center">
                <a href="/">
              <h3 className="animate-charcter">Pokédex</h3>
                </a>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <input
            type="text"
            style={{
            //   marginLeft: "40%",
              marginBottom: "30px",
              marginRight: "1%",
              borderRadius: "5px",
              padding: "3px 10px"
            }}
            placeholder="🔍 Search Pokemon"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select
            style={{ borderRadius: "5px", border: "2px solid gray", padding: "3px 7px", height: "32px" }}
            value={filterType}
            onChange={handleFilterChange}
          >
            <option value="">All Types</option>
            <option value="water">Water</option>
            <option value="fire">Fire</option>
            <option value="rock">Rock</option>
            <option value="electric">Electric</option>
            <option value="normal">Normal</option>
            <option value="grass">Grass</option>
            <option value="ghost">Ghost</option>
            <option value="bug">Bug</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Main;
