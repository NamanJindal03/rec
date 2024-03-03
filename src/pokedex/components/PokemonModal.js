import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'
export default function PokemonModal({pokemonData, closeModal}) {
  console.log(pokemonData)
  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='content'>
        abcd
        <button onClick={closeModal}>close modal</button>
      </div>
      
    </div>,
    document.getElementById('portal')
  )
}

/* 
  range -> root -> 1 -9
*/