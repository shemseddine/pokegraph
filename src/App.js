import React from 'react';
import Pokedex from './Pokedex';
import PokeDetail from './PokeDetail';

class App extends React.Component{
    state = {
        id: null
    }

    pokemonSelected = (id) => {
        this.setState({id})
    }

    render(){
        return (
            <div style={{width: 600, margin: "auto"}}>
                <h1>Poke Graph v1.0</h1>
                <div style={{height: 500, overflow: "auto"}}>
                    <div style={{float:"left", width: 150}}>
                        <Pokedex pokemonSelected={this.pokemonSelected} />
                    </div>
                    <div style={{float: "right", width: 400}}>
                        {this.state.id && <PokeDetail id={this.state.id} /> }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;