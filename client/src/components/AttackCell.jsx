import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import PokemonTypeTag from "./PokemonTypeTag";
import { type as typeMixin } from "../style/mixins/index";
import { spacing, colours } from "../style/variables";

const AttackCell = ({ name, type, damage, category }) => (
  <StyledAttack>
    <h3 className="AttackTitle">{name}</h3>    
    <div className="AttackDamage">
     damage: {damage}
    </div>
    <div className="AttackCategory">
    category: {category}
    </div>
    <div className="AttackType">
      <PokemonTypeTag type={type} />
    </div>
  </StyledAttack>
);

AttackCell.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

const StyledAttack = Styled.div`
  padding: ${spacing.small.level5} ${spacing.small.level2};
  background: ${colours.borderColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  :not(:last-child) {
    margin-bottom: ${spacing.small.level4};
  }

  .AttackTitle {
    ${typeMixin("heading3")}
    margin-bottom: ${spacing.small.level3};
    margin-top: 0;
  }

  .AttackDamage {
    ${typeMixin("detail")}
    margin-bottom: ${spacing.small.level2};
  }

  .AttackCategory {
    ${typeMixin("detail")}
  }

  .AttackType{
    margin-top: ${spacing.small.level5};
  }
`;

export default AttackCell;
