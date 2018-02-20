import React from "react";
import PropTypes from "prop-types";
import Styled, { css } from "styled-components";
import { Page, Row, Column } from "hedron";
import { spacing, colours } from "../style/variables";
import { type } from "../style/mixins/index";

const Callout = ({ title, subtitle, stretch }) => (
  <StyledCallout className="Callout" stretch={stretch}>
    <Page>
      <Column fluid>
        <Row>
          <div className="CalloutInner">
            <h2 className="CalloutTitle">{title}</h2>
            <h3 className="CalloutSubtitle">{subtitle}</h3>
          </div>
        </Row>
      </Column>
    </Page>
  </StyledCallout>
);

Callout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  stretch: PropTypes.bool
};

Callout.defaultProps = {
  subtitle: "",
  stretch: false
};

const StyledCallout = Styled.section`
  background: ${colours.primaryColorLight};
  padding: ${spacing.mid.level4} 0;

  ${props =>
    props.stretch &&
    css`
      flex: 1;
    `}

  .CalloutInner {
    padding: 0 ${spacing.mid.level1};
  }

  .CalloutTitle {
    ${type("heading2")}
  }

  .CalloutSubtitle {
    ${type("heading3")}
  }
`;

export default Callout;
