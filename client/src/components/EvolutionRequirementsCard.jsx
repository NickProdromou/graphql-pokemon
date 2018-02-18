import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import { type } from "../style/mixins/index";
import { spacing, colours } from "../style/variables";

const EvolutionReqirementsCard = ({ name, amount }) => (
  <StyledRequirements>
    <span className="RequirementName">
      <span className="RequirementAmount">{amount}</span>
      {name}
    </span>
  </StyledRequirements>
);

EvolutionReqirementsCard.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

const StyledRequirements = Styled.div`
  padding: ${spacing.small.level5} ${spacing.small.level2};
  background: ${colours.borderColor};

  :not(:last-child) {
    margin-bottom: ${spacing.small.level4};
  }

  .RequirementName {
    ${type("ui")}
    margin-bottom: ${spacing.small.level3};
    margin-top: 0;
  }

  .RequirementAmount {
    ${type("ui")}
    margin-right: ${spacing.small.level1};
    font-weight: bold;
    margin-bottom: ${spacing.small.level2};
  }
`;

export default EvolutionReqirementsCard;
