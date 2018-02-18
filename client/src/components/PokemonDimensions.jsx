import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import { type } from "../style/mixins/index";
import { spacing, colours } from "../style/variables";

const PokemonDimensions = ({ min, max }) => (
  <StyledDimensions>
    <div>
      <span className="DimensionTitle">min:</span>
      <span className="DimensionAmount">{min}</span>
    </div>
    <div>
      <span className="DimensionTitle">max:</span>
      <span className="DimensionAmount">{max}</span>
    </div>
  </StyledDimensions>
);

PokemonDimensions.propTypes = {
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired
};

const StyledDimensions = Styled.div`
  padding: ${spacing.small.level2};
  background: ${colours.borderColor};
  display: flex;
  flex-direction: column;

  .DimensionTitle {
    ${type("ui")}
    margin-top: 0;
    margin-right: ${spacing.small.level2};
  }

  .DimensionAmount {
    ${type("ui")}
    font-weight: bold;
  }
`;

export default PokemonDimensions;
