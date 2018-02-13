import React from "react";
import PropTypes from "prop-types";
import Styled, {css} from "styled-components";
import { spacing, colours, pokemonTypeColours } from "../style/variables";
import { type as typeMixin } from "../style/mixins/index";

const PokemonTypeTag = ({ type }) => <TypeTag type={type}>{type}</TypeTag>;

const TypeTag = Styled.span`
  ${typeMixin('detail')}
  border-radius: 10px;
  color: ${colours.whiteText};
  padding: ${spacing.small.level2} ${spacing.small.level4};  

  :not(:last-child) {
    margin-right: 5px;
  }

  ${(props) => props && props.type === 'Bug' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Dragon' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Ice' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Fighting' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Fire' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Flying' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Grass' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Ghost' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Ground' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Electric' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Normal' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Poison' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Psychic' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
  ${(props) => props && props.type === 'Rock' && css`
    background: ${pokemonTypeColours[props.type]};
  `}  
  ${(props) => props && props.type === 'Water' && css`
    background: ${pokemonTypeColours[props.type]};
  `}
`;

PokemonTypeTag.propTypes = {
  type: PropTypes.string.isRequired,
}

export default PokemonTypeTag;
