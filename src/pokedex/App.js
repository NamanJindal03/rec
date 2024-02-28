import React, {useState, useEffect} from 'react'

export default function App() {
    const [pokemons, setPokemons] = useState([]);
    const [currentPokemonAPI, setCurrentPokemonAPI] = useState("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1");
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
            console.log(pokemonData);
            console.log(pokemonData[0].results);
            setCurrentPokemonAPI(pokemonData[0]?.next ? pokemonData[0]?.next : null)
            setPokemons((prev)=> [...prev, ...pokemonData[0].results])

        }
        catch(err){
            console.err(err)
        }
    }
    useEffect(()=>{
        getPokemonData()
    },[])
  return (
    <>
        {currentPokemonAPI ? <button onClick={getPokemonData}>More Pokemons</button> : null}
    </>
  )
}
