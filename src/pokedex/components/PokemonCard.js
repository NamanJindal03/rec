import React from 'react'

export default function PokemonCard({pokemonData, assignPokemonToModal}) {
    const {id, image, name, type} = pokemonData;
  return (
    <div className='pokemon-card'>
        <span>{id}</span>
        <img src={image} alt="" />
        <span>{name}</span>
        <span>Type: {type}</span>
        <button onClick={()=>assignPokemonToModal(pokemonData)}>Know more</button>
    </div>
  )
}
