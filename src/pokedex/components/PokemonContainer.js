import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonContainer({pokemons, assignPokemonToModal}) {
  return (
    <div className='pokemon-container'>
        {
            pokemons.map((pokemon)=>{
                return (
                    <>
                        <PokemonCard />
                    </>
                )
            })
        }
    </div>
  )
}
