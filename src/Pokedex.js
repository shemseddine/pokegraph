import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Pokedex = ({pokemonSelected}) => (
    <Query
        query={gql`
            {
                pokemons(first: 10){
                    id
                    number
                    name
                    image
                }
            }`
        }>
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error... :(</p>;
            
            var pokemons = data.pokemons.map(({id, number, name, image}) => (
                <div key={id} style={{textAlign: "center"}}>
                    <a href="#" onClick={() => pokemonSelected(id)}>
                        <img src={image} style={{width: 50, height: 50}}/>
                        <p>#{number} {name}</p>
                    </a>
                </div>
            ));
            return (
                <div style={{width: 150, borderRight: "1px solid #ccc"}}>
                    {pokemons}
                </div>
            )
        }}
    </Query>
);

export default Pokedex;