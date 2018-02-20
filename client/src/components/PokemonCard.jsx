import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { BubbleLoader } from "react-css-loaders";
import { graphql } from "react-apollo";

import PokemonTypeTag from "./PokemonTypeTag";
import pokemonPreviewQuery from "../queries/pokemonPreview"
import { spacing, colours } from "../style/variables";
import { type } from "../style/mixins/index";

const PokemonCard = ({ data }) => (
  <div>
    {data.loading ? (
      <BubbleLoader />
    ) : (
      <StyledPokemonCard>
        <figure className="PokemonCardImageContainer">
          <img src={data.pokemon.image} alt="" className="PokemonCardImage" />
        </figure>
        <div className="PokemonCardDetail">
          <div className="PokemonCardTitle">{data.pokemon.name}</div>
          <div className="PokemonCardClassification">
            {data.pokemon.classification}
          </div>
          <div className="PokemonCardTypes">
            {data.pokemon.types.map(t => (
              <PokemonTypeTag key={`type_${data.pokemon.name}_${t}`} type={t} />
            ))}
          </div>
        </div>
      </StyledPokemonCard>
    )}
  </div>
);

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    pokemon: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.string),
      classification: PropTypes.string,
    })
  }).isRequired
};

const StyledPokemonCard = Styled.div`
  ${type("ui")}
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
  margin-bottom: ${spacing.small.level4};
  

  .PokemonCardImageContainer {
    margin: 0 auto;
    overflow: hidden;
    padding: ${spacing.small.level4} ${spacing.small.level2};   
    text-align: center;
  }

  .PokemonCardImage {
    height: 200px;
  }

  .PokemonCardDetail {
    border-top: 1px solid ${colours.borderColor};
    padding: ${spacing.small.level2} ${spacing.small.level5};   
  }
  .PokemonCardTitle {
    ${type("heading2")}
  }

  .PokemonCardClassification {
    ${type("detail")}
  }

  .PokemonCardTypes {
    display: flex;
    padding: ${spacing.small.level5} 0;
  }

`;

const PokemonCardWithData = graphql(pokemonPreviewQuery, {
  options: props => ({
    variables: {
      pokemonName: props.pokemonName
    }
  })
})(PokemonCard);

export default PokemonCardWithData;
