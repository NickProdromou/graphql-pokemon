import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const getSelectedPokemon = gql`
  query($pokemonName: String) {
    pokemon(name: $pokemonName) {
      id
      image
      name
    }
  }
`;

class PokemonCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render() {
    const { loading } = this.state;
    console.log(this.props);
    
    return (      
      <div>
        { loading && (<p>A loader</p>) }
        <p>{this.props.pokemonName}</p>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired
};

const PokemonCardWithData = graphql(getSelectedPokemon, {
  options: (props) => ({
    variables: {
      pokemonName: props.pokemonName
    }
  }),
})(PokemonCard);

export default PokemonCardWithData;
