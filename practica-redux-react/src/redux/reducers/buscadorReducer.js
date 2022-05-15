import { FECHEPOKEMONREQUIERE, FECHPOKEMONERROR, FECHPOKEMONSUCCESS } from "../actions/buscadorAction"

const initialState={
    loading:false,
    pokemon: [],
    error: ""
}
const buscador =(state = initialState, action)=>{
    switch(action.type){
       case FECHEPOKEMONREQUIERE:
           return{
               ...state,
               loading: true
           }
           case FECHPOKEMONSUCCESS:
               return{
                   loading: false,
                   pokemon: action.payload,
                   error: ""
               }
               case FECHPOKEMONERROR:
                   return{
                    loading: false,
                    pokemon: [],
                    error: action.payload
                   }
       
       
        default:return state
    }
}

export default buscador;