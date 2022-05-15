import { COMPRARPOKEMON, REGRESARPOKEMON } from "../actions/gameShopAction";

const defaulGameShop={
    pokemon: 30
}


const gameShop= (state= defaulGameShop, action)=>{
    switch(action.type){
        case COMPRARPOKEMON:{
            return{
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }
        case REGRESARPOKEMON:{
            return{
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }

        default: return state;
    }
}
export default gameShop;