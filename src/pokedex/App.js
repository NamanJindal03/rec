import React, {useState, useEffect} from 'react'
import PokemonContainer from './components/PokemonContainer';
import './style.css'
import PokemonModal from './components/PokemonModal';

export default function App() {
    const [pokemons, setPokemons] = useState([]);
    const [currentPokemonAPI, setCurrentPokemonAPI] = useState("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1");
    const [selectPokemonInModal, setSelectedPokemonInModal] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    function assignPokemonToModal(assignedPokemon){
        setSelectedPokemonInModal(assignedPokemon);
    }
    function closeModal(){
        setSelectedPokemonInModal("")
    }
    async function getPokemonData(){
        //handle negative cases first -> this makes your code very clean
        if(!currentPokemonAPI){
            return;
        }
        try{
            const response = await fetch(currentPokemonAPI);
            if(!response.ok){
                throw new Error("Something went wrong")
            }
            const pokemonData = await response.json();
            // console.log(pokemonData);
            // console.log(pokemonData[0].results);
            setCurrentPokemonAPI(pokemonData[0]?.next ? pokemonData[0]?.next : null)
            const apiArray = pokemonData[0].results.map((pokemon)=>{
                return fetch(pokemon.url)
            })
            // console.log(apiArray);
            const pokemonStatsResponse = await Promise.all(apiArray);
            const pokemonStatsJsonPromises = pokemonStatsResponse.map((soloApiResponse)=>{
                if(!soloApiResponse.ok){
                    throw new Error("Something went wrong")
                }
                return soloApiResponse.json();
            })
            // console.log(pokemonStatsJsonPromises)
            const pokemonStats = await Promise.all(pokemonStatsJsonPromises);
            console.log(pokemonStats);
            const formatedPokemonStats = pokemonStats.map((pokemonStat)=>{
                return pokemonStat[0]
            })
            console.log(formatedPokemonStats);
            setPokemons((prev)=> [...prev, ...formatedPokemonStats]);
            setIsLoading(false);

        }
        catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
        getPokemonData()
    },[])
  return (
    <div className='container'>
        {selectPokemonInModal ? <PokemonModal pokemonData={selectPokemonInModal} closeModal={closeModal}/> : null}

        <h1>Pokemon Kingdom</h1>
        {!isLoading ? <PokemonContainer pokemons={pokemons} assignPokemonToModal={assignPokemonToModal}/> : 'Loading....'}
        {!isLoading && currentPokemonAPI ? <button onClick={getPokemonData}>More Pokemons</button> : null}

    </div>
  )
}
