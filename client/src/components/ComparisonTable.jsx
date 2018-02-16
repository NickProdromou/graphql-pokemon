import React, { Component } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import { type as typeMixin } from "../style/mixins/index";
import { colours, spacing } from "../style/variables";
import Pokemon from "../types/Pokemon";
import PokemonTypeTag from "./PokemonTypeTag";
import AttackCell from "./AttackCell";

export default class ComparisonTable extends Component {
  static propTypes = {
    compare: PropTypes.shape(Pokemon).isRequired,
    to: PropTypes.shape(Pokemon).isRequired,
    fields: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      validFields: this.stripEmptyFields(props.to ,props.compare, props.fields),
    }
  }
  
  getTableRows = fields =>
    fields.map(field => (
      <div className="TableRow" key={`${field}-field`}>
        <div className="TableCol TableTitleColumn">
          <p>{field}</p>
        </div>
        {this.mapFieldTypes(field, this.props.compare[field])}
        {this.mapFieldTypes(field, this.props.to[field])}
      </div>
    ));

  stripEmptyFields = (p1, p2, fields) => fields.filter(field => p1[field] || p2[field])

  mapFieldTypes = (field, value) => {
    switch (field) {
      case "id":
        return (
          <div className="TableCol">
            <span>{value}</span>
          </div>
        );

      case "name":
        return (
          <div className="TableCol">
            <span>{value}</span>
          </div>
        );

      case "number":
        return (
          <div className="TableCol">
            <span>{value}</span>
          </div>
        );
      case "classification":
        return (
          <div className="TableCol">
            <span>{value}</span>
          </div>
        );
      case "types":
        return (
          <div className="TypeCell TableCol ">
            {value.map(pokeType => (
              <PokemonTypeTag key={`types_${pokeType}`} type={pokeType}>
                {pokeType}
              </PokemonTypeTag>
            ))}
          </div>
        );

      case "resistant":
        return (
          <div className="TypeCell TableCol">
            {value.map(pokeType => (
              <PokemonTypeTag key={`resistant_${pokeType}`} type={pokeType}>
                {pokeType}
              </PokemonTypeTag>
            ))}
          </div>
        );

      case "weaknesses":
        return (
          <div className="TypeCell TableCol ">
            {value.map(pokeType => (
              <PokemonTypeTag key={`weaknesses_${pokeType}`} type={pokeType}>
                {pokeType}
              </PokemonTypeTag>
            ))}
          </div>
        );

      case "fleeRate":
        return (
          <div className="TableCol">
            <span>{value}</span>
          </div>
        );

      case "maxCP":
        return (
          <div className="TableCol">
            <span>{value}</span>
          </div>
        );

      case "maxHP":
        return (
          <div className="TableCol">
            <span>{value}</span>
          </div>
        );

      case "weight":
        return (
          <div className="TableCol">
            <span>{value.minimum}</span>
            <span>{value.maximum}</span>
          </div>
        );

      case "height":
        return (
          <div className="TableCol">
            <span>{value.minimum}</span>
            <span>{value.maximum}</span>
          </div>
        );

      case "attacks":
        if (value.special) {
          return (
            <div className="TableCol">
              {value.special.map(attack => (
                <AttackCell
                  key={`attack_${attack.name}_${attack.damage}-special`}
                  name={attack.name}
                  type={attack.type}
                  damage={attack.damage}
                  category="special"
                />
              ))}
            </div>
          );
        }

        if (value.fast) {
          return (
            <div className="TableCol">
              {value.special.map(attack => (
                <AttackCell
                  key={`attack_${attack.name}_${attack.damage}-fast`}
                  name={attack.name}
                  type={attack.type}
                  damage={attack.damage}
                  category="fast"
                />
              ))}
            </div>
          );
        }
        break;

      default:
        return false;
    }
    return false;
  };

  render() {
    const { compare, to } = this.props;
    const { validFields } = this.state;
    return (
      <Table className="TableContainer">
        <div className="TableHeader">
          <div className="TableHeaderCol" />
          <div className="TableHeaderCol">
            <img className="TableHeaderImage" src={compare.image} alt="" />
            <div>
              <span>{compare.name}</span>
            </div>
          </div>
          <div className="TableHeaderCol">
            <img className="TableHeaderImage" src={to.image} alt="" />
            <div>
              <span>{to.name}</span>
            </div>
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

  .TableTitleColumn {
    ${typeMixin("ui")}
    background: ${colours.accentColor};
    color: ${colours.whiteText};
    text-transform: uppercase;
  }

  .TableHeaderCol {
    flex: 1 0 306px;
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

  .TableRow {
    display: flex;    
  }  

  .TableCol {
    flex: 1 0 306px;
    align-items: flex-start;
    padding: 10px;
    border: 1px solid #eee;
  }

  .TypeCell {
    display: flex;
    flex-wrap; wrap;
  }

  .TypeTag {
    margin-bottom: ${spacing.small.level2};
  }
`;
