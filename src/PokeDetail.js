import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const PokeDetail = ({id}) => (
    <Query
        query={gql`
            query Pokemon($id: String!){
                pokemon(id: $id){
                    id
                    number
                    name
                    image
                    classification
                    maxCP
                    attacks {
                        fast{
                            type 
                            name
                            damage
                        }
                    }
                }
            }`
        }
        variables={{id}}
        >
        {({loading, error, data}) => {
            if(loading) return "Loading...";
            if(error) return "Error... :(";

            let {name, number, image, classification, maxCP, attacks} = data.pokemon;
            return (
                <div>
                    <img src={image} style={{width: 200, height: 200}}/>
                    <h2>#{number} {name}</h2>
                    <p><b>Classication:</b> {classification}</p>
                    <p><b>Max CP:</b> {maxCP}</p>
                    <b>Fast Attacks:</b>
                    <ul>
                        {attacks.fast.map(attack => (
                            <li key={attack.name}>{attack.type} - {attack.name} ({attack.damage})</li>
                        ))}
                    </ul>
                </div>
            )
        }}
        </Query>
)

export default PokeDetail;