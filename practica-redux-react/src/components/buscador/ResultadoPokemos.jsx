import React from "react";
import { useSelector } from "react-redux";


const ResultadoPokemon=()=>{
    const buscador= useSelector((state)=> state.buscador)
    return(
        <div>
          <h4>Resultado:</h4>
         {buscador.loading >= 1 && <div>Buscando...</div>}
          {buscador.length && 
          <div>
              <img src={buscador.pokemon[0].sprites.front_defaul} alt="Pokemon"/>
              <p>{buscador.pokemon[0].name}</p>
          </div>}
          {buscador.error !== "" && <p>Error</p>}
        </div>
    )
}

export default ResultadoPokemon;