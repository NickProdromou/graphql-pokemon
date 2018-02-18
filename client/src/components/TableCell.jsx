import React from 'react';
import PropTypes from 'prop-types';
import Styled, {css} from 'styled-components';

import { spacing, colours } from '../style/variables';
import { type } from '../style/mixins/index';

const TableCell = ({children, title, wrap}) => (
  <StyledCell wrap={wrap} title={title}>
    { children }
  </StyledCell>
)

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.bool, 
  wrap: PropTypes.bool,
}

TableCell.defaultProps = {
  title: false,
  wrap: false,
}

const StyledCell = Styled.div`  
  flex: 1 0 306px;
  align-items: flex-start;
  padding: ${spacing.small.level3};
  border: 1px solid #eee;

  ${(props) => props && props.wrap && css`
    display: flex;
    flex-wrap: wrap;
  `}    

  ${(props) => props && props.title && css`
   ${type("ui")}
    background: ${colours.accentColor};
    color: ${colours.whiteText};
    text-transform: uppercase;
  `}    
`

export default TableCell;
