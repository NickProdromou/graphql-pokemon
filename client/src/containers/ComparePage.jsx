import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import { BubbleLoader } from "react-css-loaders";
import { Page, Column, Row } from "hedron";

import PageContainer from "./PageContainer";
import ComparisonTable from "../components/ComparisonTable";
import Pokemon from "../types/Pokemon";
import fullPokemonQuery from "../queries/fullPokemon";

const ComparePage = ({ pokemonLeft, pokemonRight }) => (
  <PageContainer>
    <Page>
      <Row>
        <Column>
          <div>
            {!pokemonLeft.loading &&
            !pokemonLeft.error &&
            (!pokemonRight.loading && !pokemonRight.error) ? (
              <ComparisonTable
                compare={pokemonLeft.pokemon}
                to={pokemonRight.pokemon}
                fields={Object.keys(pokemonLeft.pokemon)}
              />
            ) : (
              <BubbleLoader />
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
  }).isRequired,
  history: PropTypes.string.isRequired
};

const ComparePageWithData = compose(
  graphql(fullPokemonQuery, {
    options: props => ({ variables: { name: props.match.params.compare } }),
    name: "pokemonLeft"
  }),
  graphql(fullPokemonQuery, {
    options: props => ({ variables: { name: props.match.params.to } }),
    name: "pokemonRight"
  })
)(ComparePage);

export default ComparePageWithData;
