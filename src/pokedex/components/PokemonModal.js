import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'
export default function PokemonModal({pokemonData, closeModal}) {
  const {height, weight, name, image, type} = pokemonData;
  const bs =[];
  const stats=[];

  pokemonData.stats.forEach(element => {
    if(element.base_stat){
      bs.push(element.base_stat);
    }
    if(element.stat && element.stat.name){
      stats.push(element.stat.name)
    }
  })
  console.log(bs);
  console.log(stats);
  return ReactDOM.createPortal(
    <div className='modal'>
      <div className={`content flex ${type}`}>
        <div className='pokemonDisplay flex'>
          <div className='pokemonImageContainer'>
            <img src={image} />
          </div>
          <div className='pokemonName'>
            {name}
          </div>
        </div>
        <div className={`pokemonStats flex ${type}`}>
          <div className='flexColumn'>
            <div>weight: {weight}</div>
            <div>height: {height}</div>
          </div>
          
          <div className='flexColumn' style={{rowGap: '17px', width: '124px'}}>
            {stats.map((stat, index)=>{
                return (
                  <div key={index}>stat{index+1}: {stat}</div>
                )
            })}
          </div>
          <div className='flexColumn'>
            {bs.map((baseStat, index)=>{
              return (
                <div key={index}>Bs{index+1}: {baseStat}</div>
              )
            })}

          </div>
        </div>
        <button onClick={closeModal} className={`${type} modalBtn`}>X</button>
      </div>
      
    </div>,
    document.getElementById('portal')
  )
}

/* 
  range -> root -> 1 -9
*/