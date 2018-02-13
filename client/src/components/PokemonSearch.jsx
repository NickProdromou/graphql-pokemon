import React, { Component } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import Autosuggest from "react-autosuggest";

import pokemonList from "../helpers/pokemonList";
import { spacing, colours } from "../style/variables";
import { type } from "../style/mixins/index";

export default class PokemonSearch extends Component {
  static propTypes = {
    inform: PropTypes.func.isRequired,
    identifier: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      possibleSelections: pokemonList,
      value: "",
      suggestions: []
    };
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionSelected = (event, selectedValue) => {
    this.setState({
      value: '',
      suggestions: []
    })
    this.props.inform(selectedValue, this.props.identifier);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestionValue = suggestion => suggestion;

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.possibleSelections.filter(
          poke => poke.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  renderSuggestion = suggestion => (<span className="react-autosuggest__suggestions-item">{suggestion}</span>);

  render() {
    const { suggestions, value } = this.state;

    const inputProps = {
      placeholder: "Search for a Pokemon",
      value,
      onChange: this.onChange
    };

    return (
      <SearchContainer>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </SearchContainer>
    );
  }
}

const SearchContainer = Styled.div`
.react-autosuggest {  

  &__input {
    border: 1px solid ${colours.dividerColor};
    padding: ${spacing.small.level2} ${spacing.small.level3};
    width: 100%;
  }

  &__suggestion {
    ${type('ui')}
    color: ${colours.primaryTextColor};
    padding: 8px;

    &--highlighted {
      background: ${colours.primaryColorDark};
    }
  }

  &__suggestions {
    
    &-list {
      list-style-type: none;
      padding: 0;
      margin: 0;      
    }

    &-container {    
      
      &--open {
        border: 1px solid ${colours.dividerColor};    
      }

    }  
  }
  
}

`;
