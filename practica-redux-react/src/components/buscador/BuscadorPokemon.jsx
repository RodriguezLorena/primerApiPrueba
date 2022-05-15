import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorAction"

const BuscadorPokemon=()=>{
    const dispatch = useDispatch();
    const [pokemon_name, set_pokemon_name]= useState("mewtwo")
    return(
        <div>
            <form>
                <label>Buscar Pokemon</label>
                <input id="buscar_pokemon" value={pokemon_name}
                onChange={(event)=>{
                    set_pokemon_name(event.target.value);
                }}/>
                <button onClick={()=>{
                    dispatch(fetchPokemon(pokemon_name))
                }}>Enviar</button>
            </form>
        </div>
    )
}

export default BuscadorPokemon;