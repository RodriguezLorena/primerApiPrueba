import React from "react";
import { useSelector } from "react-redux";


const CantidadPokemonHook =()=>{
    const game_shop=useSelector((state)=>state.gameShop)
    console.log(game_shop)
    return(
        <React.Fragment>
            Unidad:{game_shop.pokemon}
        </React.Fragment>
    )
}

export default CantidadPokemonHook;