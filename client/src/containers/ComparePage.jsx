import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { Page, Column, Row } from "hedron";

import PageContainer from "./PageContainer";
import ComparisonTable from "../components/ComparisonTable";
import Pokemon from "../types/Pokemon";
import fullPokemon from "../queries/fullPokemon";

const leftHandSide = gql`
  query($compare: String) {
    pokemon(name: $compare) {
      ${fullPokemon}
  }
}
`;

const rightHandSide = gql`
  query($to: String) {
    pokemon(name: $to) {
      ${fullPokemon}
    }
  }
`;

const ComparePage = ({ pokemonLeft, pokemonRight }) => (
  <PageContainer>
    <Page>
      <Row>
        <Column>
          <div>
            {!pokemonLeft.loading && !pokemonRight.loading ? (
              <ComparisonTable
                compare={pokemonLeft.pokemon}
                to={pokemonRight.pokemon}
                fields={Object.keys(pokemonLeft.pokemon)}
              />
            ) : (
              <p>loading</p>
            )}
          </div>
        </Column>
      </Row>
    </Page>
  </PageContainer>
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
