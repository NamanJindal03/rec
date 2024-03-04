import React from 'react'

export default function PokemonCard({pokemonData, assignPokemonToModal}) {
    const {id, image, name, type} = pokemonData;
  return (
    <div className={`pokemon-card ${type} flex`}>
        <span>{id}</span>
        <div className='flex image-container '>
          <img src={image} alt="" />
        </div>
        <div className='flex basicPokemonDetails'>
          <span>{name.toUpperCase()}</span>
          <span>Type: {type}</span>
        </div>
        
        <button 
          onClick={()=>assignPokemonToModal(pokemonData)}
          className={`${type} btn`}
        >
          Know more...
        </button>
    </div>
  )
}
