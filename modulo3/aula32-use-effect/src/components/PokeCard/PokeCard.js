import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function PokeCard(props) {
  const [pokemon,setPokemon] = useState({})

useEffect(()=>{
pegaPokemon(props.pokemon)

},[props.pokemon])


const pegaPokemon = (pokemon) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => {
  setPokemon(res.data)
    })
    .catch(err => {
      console.log(err);
    });
};

 
  return (

    <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
    </div>
  )
}

