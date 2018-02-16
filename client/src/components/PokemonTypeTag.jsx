import React from "react";
import PropTypes from "prop-types";
import Styled, {css} from "styled-components";
import { spacing, colours, pokemonTypeColours } from "../style/variables";
import { type as typeMixin } from "../style/mixins/index";

const PokemonTypeTag = ({ type }) => <TypeTag className="TypeTag" type={type}>{type}</TypeTag>

const TypeTag = Styled.span`
  ${typeMixin('detail')}
  border-radius: 10px;
  color: ${colours.whiteText};
  padding: ${spacing.small.level2} ${spacing.small.level4};  

  :not(:last-child) {
    margin-right: 5px;
  }

  ${(props) => props && props.type && css`
    background: ${pokemonTypeColours[props.type]};
  `}
`;

PokemonTypeTag.propTypes = {
  type: PropTypes.string.isRequired,
}

export default PokemonTypeTag;
