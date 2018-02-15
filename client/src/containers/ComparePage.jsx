import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

import Pokemon from "../types/Pokemon";

const leftHandSide = gql`
  query($compare: String) {
  pokemon(name: $compare) {
    id
    number
    name
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP        
    maxCP
    maxHP
    image
    evolutionRequirements {
      name
      amount
    }
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
}

`;

const rightHandSide = gql`
  query($to: String) {
  pokemon(name: $to) {
    id
    number
    name
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP        
    maxCP
    maxHP
    image
    evolutionRequirements {
      name
      amount
    }
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
}

`;

const ComparePage = ({ pokemonLeft, pokemonRight }) => (
  <div>
    {pokemonLeft.loading ? (
      <p>loading</p>
    ) : (
      <div>
        <img src={pokemonLeft.pokemon.image} alt="pokemon" />
        <p>{JSON.stringify(pokemonLeft.pokemon, null, '\t')}</p>
      </div>
    )}
    {pokemonRight.loading ? (
      <p>loading</p>
    ) : (
      <div>
        <img src={pokemonRight.pokemon.image} alt="pokemon" />
        <p>{JSON.stringify(pokemonRight.pokemon, null, '\t')}</p>
      </div>
    )}
  </div>
);

ComparePage.propTypes = {
  pokemonLeft: PropTypes.shape({
    pokemon: PropTypes.shape(Pokemon),
    loading: PropTypes.bool
  }).isRequired,
  pokemonRight: PropTypes.shape({
    pokemon: PropTypes.shape(Pokemon),
    loading: PropTypes.bool
  }).isRequired
};

const ComparePageWithData = compose(
  graphql(leftHandSide, {
    options: props => ({ variables: { compare: props.match.params.compare } }),
    name: "pokemonLeft"
  }),
  graphql(rightHandSide, {
    options: props => ({ variables: { to: props.match.params.to } }),
    name: "pokemonRight"
  })
)(ComparePage);

export default ComparePageWithData;
