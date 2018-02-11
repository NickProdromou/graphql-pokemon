import React from "react";
import Styled from "styled-components";
import { Page, Row, Column } from "hedron";
import { spacing, colours } from "../style/variables";
import { type } from "../style/mixins/index";

const Header = () => (
  <StyledHeader className="Header">
    <Page>
      <Row fluid>
        <Column fluid>
          <h1 className="HeaderTitle">Compare a pokémon</h1>
        </Column>
      </Row>
    </Page>
  </StyledHeader>
);

const StyledHeader = Styled.header`
  background: ${colours.primaryColorDark};
  box-shadow: 1px 4px 17px rgba(0,0,0,0.5);

  .HeaderTitle {
    ${type("heading2")};
    color: ${colours.primaryTextColor};    
    font-weight: bold;
    padding: 0 ${spacing.mid.level1}; 
  }
`;

export default Header;
