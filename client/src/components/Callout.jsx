import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Page, Row, Column } from "hedron";
import { spacing, colours } from "../style/variables";
import { type } from "../style/mixins/index";

const Callout = ({ title, subtitle }) => (
  <StyledCallout className="Callout">
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
  subtitle: PropTypes.string
};

Callout.defaultProps = {
  subtitle: ""
};

const StyledCallout = Styled.section`
  background: ${colours.primaryColorLight};
  padding: ${spacing.mid.level4} 0;

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
