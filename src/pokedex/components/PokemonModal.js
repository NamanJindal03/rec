import React from 'react'
import ReactDOM from 'react-dom'

export default function PokemonModal() {
  return ReactDOM.createPortal(
    <div>
      PokemonModal
    </div>,
    document.getElementById('portal')
  )
}
