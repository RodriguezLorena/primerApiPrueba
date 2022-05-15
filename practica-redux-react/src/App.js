import React from 'react';
import './App.css';
//  import CantidadPokemon from './components/CantidadPokemon';
//  import CompraPokemon from './components/CompraPokemon';


import CantidadPokemonHook from './components/CantidadPokemonHook';
import ComprarPokemonHook from './components/CompraPokemoHoook';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemos';

function App() {

  return (
 
    <div className="App">
      <h1>Bienvenidos al shoppPokemon</h1> 
     
      <img src={require("./img/pokemon.jpg")} alt="Pokemon" />
     
      <div><CantidadPokemonHook/></div>
       <div><ComprarPokemonHook/></div> 
      <div><BuscadorPokemon/></div>
      <div><ResultadoPokemon/></div>
    </div>
    
  );
}

export default App;
