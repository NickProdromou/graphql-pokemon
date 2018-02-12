import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";
import pokemonList from "../helpers/pokemonList";

export default class PokemonSearch extends Component {
  static propTypes = {
    inform: PropTypes.func.isRequired,
    identifier: PropTypes.string.isRequired,
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
    this.props.inform(selectedValue, this.props.identifier);
  }
 
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

  renderSuggestion = suggestion => <div>{suggestion}</div>;

  render() {
    const { suggestions, value } = this.state;

    const inputProps = {
      placeholder: "Search for a Pokemon",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
