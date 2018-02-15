import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

import Pokemon from '../types/Pokemon';

const leftHandSide = gql`
  query($compare: String) {
    pokemon(name: $compare) {
      id
      image
      name
      types
      classification
    }
  }
`;

const rightHandSide = gql`
  query($to: String) {
    pokemon(name: $to) {
      id
      image
      name
      types
      classification
    }
  }
`;

const ComparePage = props => {
  console.log(Pokemon);
  console.log(props);
  return (
    <div>
      {props.pokemonLeft.loading ? (
        <p>loading</p>
      ) : (
        <div>{JSON.stringify(props.pokemonLeft.pokemon, null, 2)}</div>
      )}
      {props.pokemonRight.loading ? (
        <p>loading</p>
      ) : (
        <div>{JSON.stringify(props.pokemonRight.pokemon, null, 2)}</div>
      )}
    </div>
  );
};

ComparePage.propTypes = {
  pokemonLeft: PropTypes.shape(Pokemon).isRequired,
  pokemonRight: PropTypes.shape(Pokemon).isRequired
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
