import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonContainer({pokemons, assignPokemonToModal}) {
  return (
    <div className='pokemon-container flex'>
        {
            pokemons.map((pokemon)=>{
                return (
                    <PokemonCard 
                        pokemonData={pokemon} 
                        assignPokemonToModal={assignPokemonToModal}
                        key={pokemon.id}
                    />
                )
            })
        }
    </div>
  )
}
