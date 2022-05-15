export const COMPRARPOKEMON= "COMPRARPOKEMON";
export const REGRESARPOKEMON="REGRESARPOKEMON";


export const comprarPokemon=(cantidad)=>{
    return{
        type: COMPRARPOKEMON,
        payload: cantidad
    }
}

export const regresarPokemon=(cantidad)=>{
    return{
        type: REGRESARPOKEMON,
        payload: cantidad
    }
}
