import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokedex.css';
import InfiniteScroll from 'react-infinite-scroll-component';


const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pokemonPerPage = 76;
    const totalPokemon = 300;

    useEffect(() => {
        const fetchData = async () => {
          const allPokemonData = [];
          for (let i = 1; i <= Math.min(currentPage * pokemonPerPage, totalPokemon); i++) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
            const koreanName = speciesResponse.data.names.find((name) => name.language.name === "ko");
            allPokemonData.push({ ...response.data, korean_name: koreanName.name });
          }
          setPokemonData(allPokemonData);
        };
      
        fetchData();
      }, [currentPage]);
    
      const fetchMoreData = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    return (
        <InfiniteScroll
          dataLength={pokemonData.length}
          next={fetchMoreData}
          hasMore={currentPage * pokemonPerPage < totalPokemon}
          loader={<h4>Loading...</h4>}
          endMessage={<p>All Pokémon have been loaded</p>}
          className="container"
        >
          {pokemonData.map((pokemon) => (
            <div key={pokemon.id} className="pokemon">
              <a href={`/pokemon/${pokemon.id}`}>
                <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
                <p>{pokemon.korean_name}</p>
                <p>도감번호: {pokemon.id}</p>
              </a>
            </div>
          ))}
        </InfiniteScroll>
      );

};

export default Pokedex;