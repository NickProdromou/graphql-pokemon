import React, { Component } from "react";
import Styled from "styled-components";
import { Page, Column, Row } from "hedron";

import { spacing, colours } from "../style/variables";
import { type } from "../style/mixins/index";

import PokemonSearch from "../components/PokemonSearch";
import PokemonCard from "../components/PokemonCard";

class PokemonSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPokemonSelected: "",
      secondPokemonSelected: ""
    };
  }

  checkChildInput = (value, identifier) => {
    this.setState({
      [identifier]: value.suggestion
    });
  };

  render() {
    const { firstPokemonSelected, secondPokemonSelected } = this.state;

    return (
      <SelectionSection>
        <Page>
          <Row className="SelectionRow">
            <Column lg={6}>
              <div className="SelectionInner">
                <PokemonSearch
                  inform={this.checkChildInput}
                  identifier="firstPokemonSelected"
                />
                {firstPokemonSelected && (
                  <PokemonCard pokemonName={this.state.firstPokemonSelected} />
                )}
              </div>
            </Column>
            <Column lg={6}>
              <div className="SelectionInner">
                <PokemonSearch
                  inform={this.checkChildInput}
                  identifier="secondPokemonSelected"
                />
                {secondPokemonSelected && (
                  <PokemonCard pokemonName={this.state.secondPokemonSelected} />
                )}
              </div>
            </Column>
          </Row>
          <Row>
            <Column>
              <div className="SelectionCompareButtonRow">
                {firstPokemonSelected &&
                  secondPokemonSelected &&
                  firstPokemonSelected !== secondPokemonSelected && (
                    <button className="SelectionCompareButton">See Comparison Chart</button>
                  )}
              </div>
            </Column>
          </Row>
        </Page>
      </SelectionSection>
    );
  }
}

const SelectionSection = Styled.div`  
  flex: 1;

  .SelectionInner, .SelectionCompareButtonRow {
    padding: 0 ${spacing.mid.level1};    
  }

  .selectionTitle {
    ${type("heading2")}
    color: ${colours.accentColor};
  }

  .SelectionCompareButton {
    ${type('ui')}
    background: ${colours.accentColor};    
    color: ${colours.primaryColorLight};
    padding: ${spacing.small.level2} ${spacing.small.level3};
  }

`;

export default PokemonSelection;
