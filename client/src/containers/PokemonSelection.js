import React, { Component } from "react";
import Styled from 'styled-components';
import { Page, Column, Row } from "hedron";

import { spacing, colours } from "../style/variables";
import { type } from "../style/mixins/index";

class PokemonSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPokemonSelected: true,
      secondPokemonSelected: true
    };
  }

  render() {
    const { firstPokemonSelected, secondPokemonSelected } = this.state;

    return (
      <SelectionSection>
        <Page>
          <Row className="SelectionRow">
            <Column lg={6}>
              <div className="SelectionInner">
                <h2 className="selectionTitle">pokemon 1</h2>
                <p>AutocompleteSearchBar</p>
                <p>PokemonCard</p>
              </div>              
            </Column>
            <Column lg={6}>
              <div className="SelectionInner">
                <h2 className="selectionTitle">pokemon 2</h2>
                <p>AutocompleteSearchBar</p>
                <p>PokemonCard</p>
              </div>              
            </Column>
          </Row>
          <Row>
            <Column>
              <div className="SelectionCompareButton">
                {firstPokemonSelected &&
                secondPokemonSelected && <button>Compare</button>}
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

  .SelectionInner, .SelectionCompareButton {
    padding: 0 ${spacing.mid.level1};    
  }

  .selectionTitle {
    ${type('heading2')}
    color: ${colours.accentColor}
  }

`;

export default PokemonSelection;
