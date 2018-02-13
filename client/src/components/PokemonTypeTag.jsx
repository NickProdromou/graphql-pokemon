import React from "react";
import PropTypes from "prop-types";
import Styled, {css} from "styled-components";
import { spacing, colours } from "../style/variables";
import { type as typeMixin } from "../style/mixins/index";

const PokemonTypeTag = ({ type }) => <TypeTag type={type}>{type}</TypeTag>;

const TypeTag = Styled.span`
  ${typeMixin('detail')}
  color: ${colours.whiteText};
  padding: ${spacing.small.level2} ${spacing.small.level4};  

  :not(:last-child) {
    margin-right: 5px;
  }

  ${(props) => props && props.type === 'Bug' && css`
    background: green;
  `}
  ${(props) => props && props.type === 'Dragon' && css`
    background: purple;
  `}
  ${(props) => props && props.type === 'Ice' && css`
    background: lightblue;
  `}
  ${(props) => props && props.type === 'Fighting' && css`
    background: red;
  `}
  ${(props) => props && props.type === 'Fire' && css`
    background: orange;
  `}
  ${(props) => props && props.type === 'Flying' && css`
    background: purple;
  `}
  ${(props) => props && props.type === 'Grass' && css`
    background: green;
  `}
  ${(props) => props && props.type === 'Ghost' && css`
    background: purple;
  `}
  ${(props) => props && props.type === 'Ground' && css`
    background: brown;
  `}
  ${(props) => props && props.type === 'Electric' && css`
    background: yellow;
  `}
  ${(props) => props && props.type === 'Normal' && css`
    background: gold;
  `}
  ${(props) => props && props.type === 'Poison' && css`
    background: purple;
  `}
  ${(props) => props && props.type === 'Psychic' && css`
    background: pink;
  `}
  ${(props) => props && props.type === 'Rock' && css`
    background: brown;
  `}  
  ${(props) => props && props.type === 'Water' && css`
    background: blue;
  `}
`;

PokemonTypeTag.propTypes = {
  type: PropTypes.string.isRequired,
}

export default PokemonTypeTag;
