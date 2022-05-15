import { combineReducers } from "redux";
import gameShop from "./gameShopReducer";
import buscador from "./buscadorReducer";

const rootReducer= combineReducers({
    gameShop,
    buscador


})

export default rootReducer;