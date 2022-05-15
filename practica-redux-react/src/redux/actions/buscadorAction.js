import axios from "axios"
//import { ReactReduxContext } from "react-redux"

export const FECHEPOKEMONREQUIERE = "FechPokemonRequiere"
export const FECHPOKEMONSUCCESS= "FechPokemonSuccess" 
export const FECHPOKEMONERROR= "FechPokemonError"

export const FechPokemonRequiere=()=>{
    return{
        type: FECHEPOKEMONREQUIERE,
    }
        
    
}
export const FechPokemonSuccess=(pokemon)=>{
    return{
        Type: FECHPOKEMONSUCCESS,
        payload: pokemon
    }
        
    
}
export const FechPokemonError=(error)=>{
    return{
        type:FECHPOKEMONERROR,
        payload: error
    }
       
    
}

const fechPokemon=(valor)=>{
    return(dispatch)=>{
        dispatch(FechPokemonRequiere());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(response=>{
            dispatch(FechPokemonSuccess([response.data]));
        })
        .catch(error =>{
                dispatch(FechPokemonError("no se encontro el producto"))
            })
       
    }
}
 
export default fechPokemon