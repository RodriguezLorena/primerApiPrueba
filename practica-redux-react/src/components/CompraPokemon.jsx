import React, { Component } from "react";
import {connect} from "react-redux";
import {comprarPokemon , regresarPokemon} from "../redux/actions/gameShopAction"

class CompraPokemon extends Component{
    render(){
        return <div>
            <button onClick={()=>{
                this.props.comprarPokemon(1);
            }}>Comprar</button>
            <button onClick={()=>{
                this.props.regresarPokemon(1);
            }}>Devolver</button>
        </div>
    }
}

const mapDispatchToProps={
    comprarPokemon,
    regresarPokemon

}

export default connect(null, mapDispatchToProps)(CompraPokemon);