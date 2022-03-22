import React, {useEffect, useState} from "react";
import axios from "axios";

const PokeCard = (props) =>{
  const [pokemon, setPokemon] = useState ({})

  const pegaPokemon = pokeName => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
    .then(res => {
      setPokemon(res.data);
    })
    .catch(err => {
      console.log(err);
      });
  };

  useEffect(()=>{pegaPokemon()}, [props.pokeName])

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }


export default PokeCard;
