import React, { useEffect, useState } from 'react';

const Main = (totalCard) => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/pokemon?limit=${totalCard}`);

  }, []);

  return (
    <>
      
    </>
  );
};

export default Main;
