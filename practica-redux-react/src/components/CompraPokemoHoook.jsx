import React from "react";
import { useDispatch } from "react-redux";
import { comprarPokemon, regresarPokemon } from "../redux/actions/gameShopAction";

const ComprarPokemonHook=()=>{
    const dispatch= useDispatch()
    return(
        <div>
            <button onClick={()=>{
                dispatch(comprarPokemon(1))
            }}>
                Comprar
            </button>
            <button onClick={()=>{
                dispatch(regresarPokemon(1))
            }}>
                Regresar Compra
            </button>
        </div>
    )
}

export default ComprarPokemonHook;