import React from "react";
import Styled from "styled-components";
import { Page, Row, Column } from "hedron";
import { spacing, colours } from "../style/variables";
import { type } from "../style/mixins/index";

const Footer = () => (
  <StyledFooter className="Footer">
    <Page>
      <Row>
        <Column>
          <h1 className="FooterText">&copy; Nick Prodromou 2018</h1>
        </Column>
      </Row>
    </Page>
  </StyledFooter>
);

const StyledFooter = Styled.footer`
  background: ${colours.dividerColor};

  .FooterText {
    ${type("ui")};
    padding: 0 ${spacing.mid.level1}; 
    color: ${colours.primaryTextColor};
  }
`;

export default Footer;
