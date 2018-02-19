import React, { Component } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import { spacing } from "../style/variables";
import { mediaQuery } from "../style/mixins/index";
import Pokemon from "../types/Pokemon";
import TableCell from "./TableCell";
import mapFieldTypes from "../helpers/mapFieldTypes";
import mapFieldTitles from "../helpers/mapFieldTitles";

export default class ComparisonTable extends Component {
  static propTypes = {
    compare: PropTypes.shape(Pokemon).isRequired,
    to: PropTypes.shape(Pokemon).isRequired,
    fields: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      validFields: this.stripUnwantedFields(
        this.stripEmptyFields(props.to, props.compare, props.fields)
      )
    };
  }

  getTableRows = fields =>
    fields.map(field => (
      <div className="TableRow" key={`${field}-field`}>
        <TableCell title>
          <p>{mapFieldTitles(field)}</p>
        </TableCell>
        {mapFieldTypes(field, this.props.compare[field])}
        {mapFieldTypes(field, this.props.to[field])}
      </div>
    ));

  stripEmptyFields = (p1, p2, fields) =>
    fields.filter(field => p1[field] || p2[field]);

  stripUnwantedFields = fields =>
    fields.filter(
      field => field !== "__typename" && field !== "image" && field !== "id"
    );

  render() {
    const { compare, to } = this.props;
    const { validFields } = this.state;
    return (
      <Table className="TableContainer">
        <div className="TableHeader">
          <div className="TableHeaderCol EmptyCell" />
          <div className="TableHeaderCol">
            <img className="TableHeaderImage" src={compare.image} alt="" />
          </div>
          <div className="TableHeaderCol">
            <img className="TableHeaderImage" src={to.image} alt="" />
          </div>
        </div>
        <div className="TableBody">{this.getTableRows(validFields)}</div>
      </Table>
    );
  }
}

const Table = Styled.div`

  .TableContainer {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin: 32px 0;
    max-width: 960px;
  }

  .TableHeader {
    display: flex;
  }

  .TableHeaderImage {
    height: 200px;    
  }  

  .TableHeaderCol {
    flex: 1 0 33%;
    border: 1px solid #eee;
    text-align: center;
    overflow: hidden;

    :nth-child(1) {
      border: none;      
    }
  }

  .TableBody {
    display: flex;
    flex-direction: column;
  }

  .EmptyCell {
    display: none;

    ${mediaQuery(
      "small",
      `
       display: block;
    `
    )}
  }

  .TableRow {
    display: flex;    
    flex-direction: column;

    ${mediaQuery(
      "small",
      `
      flex-direction: row;
      flex-wrap: no-wrap;
    `
    )}

  }    

  .TypeTag {
    margin-bottom: ${spacing.small.level2};
  }
`;
