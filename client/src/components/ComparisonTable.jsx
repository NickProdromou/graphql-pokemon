import React, { Component } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import { spacing } from "../style/variables";
import Pokemon from "../types/Pokemon";
import PokemonTypeTag from "./PokemonTypeTag";
import TableCell from "./TableCell";
import AttackCell from "./AttackCell";
import PokemonCard from "./PokemonCard";
import EvolutionRequirementsCard from "./EvolutionRequirementsCard";
import PokemonDimensions from "./PokemonDimensions";

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
          <p>{this.mapFieldTitles(field)}</p>
        </TableCell>
        {this.mapFieldTypes(field, this.props.compare[field])}
        {this.mapFieldTypes(field, this.props.to[field])}
      </div>
    ));

  stripEmptyFields = (p1, p2, fields) =>
    fields.filter(field => p1[field] || p2[field]);

  stripUnwantedFields = fields =>
    fields.filter(field => field !== "__typename" && field !== "image"  && field !== "id");

  mapFieldTitles = title => {
    switch (title) {
      case "evolutionRequirements":
        return "evolution Requirements";

      case "maxCP":
        return "max CP";

      case "maxHP":
        return "max Hp";

      case "fleeRate":
        return "flee rate";

      default:
        return title;
    }
  };

  mapFieldTypes = (field, value) => {
    switch (field) {
      case "id":
        return (
          <TableCell>
            <span>{value}</span>
          </TableCell>
        );

      case "name":
        return (
          <TableCell>
            <span>{value}</span>
          </TableCell>
        );

      case "number":
        return (
          <TableCell>
            <span>{value}</span>
          </TableCell>
        );

      case "classification":
        return (
          <TableCell>
            <span>{value}</span>
          </TableCell>
        );

      case "types":
        return (
          <TableCell wrap>
            {value.map(pokeType => (
              <PokemonTypeTag key={`types_${pokeType}`} type={pokeType}>
                {pokeType}
              </PokemonTypeTag>
            ))}
          </TableCell>
        );

      case "resistant":
        return (
          <TableCell wrap>
            {value.map(pokeType => (
              <PokemonTypeTag key={`resistant_${pokeType}`} type={pokeType}>
                {pokeType}
              </PokemonTypeTag>
            ))}
          </TableCell>
        );

      case "weaknesses":
        return (
          <TableCell wrap>
            {value.map(pokeType => (
              <PokemonTypeTag key={`weaknesses_${pokeType}`} type={pokeType}>
                {pokeType}
              </PokemonTypeTag>
            ))}
          </TableCell>
        );

      case "evolutions":
        return value !== null ? (
          <TableCell>
            {value.map(pokemon => <PokemonCard pokemonName={pokemon.name} />)}
          </TableCell>
        ) : (
          <TableCell />
        );

      case "evolutionRequirements":
        return value !== null ? (
          <TableCell>
            <EvolutionRequirementsCard
              name={value.name}
              amount={value.amount}
            />
          </TableCell>
        ) : (
          <TableCell />
        );

      case "fleeRate":
        return (
          <TableCell>
            <span>{value}</span>
          </TableCell>
        );

      case "maxCP":
        return (
          <TableCell>
            <span>{value}</span>
          </TableCell>
        );

      case "maxHP":
        return (
          <TableCell>
            <span>{value}</span>
          </TableCell>
        );

      case "weight":
        return (
          <TableCell>
            <PokemonDimensions min={value.minimum} max={value.maximum} />
          </TableCell>
        );

      case "height":
        return (
          <TableCell>
            <PokemonDimensions min={value.minimum} max={value.maximum} />
          </TableCell>
        );

      case "attacks":
        if (value.special) {
          return (
            <TableCell>
              {value.special.map(attack => (
                <AttackCell
                  key={`attack_${attack.name}_${attack.damage}-special`}
                  name={attack.name}
                  type={attack.type}
                  damage={attack.damage}
                  category="special"
                />
              ))}
            </TableCell>
          );
        }

        if (value.fast) {
          return (
            <TableCell>
              {value.special.map(attack => (
                <AttackCell
                  key={`attack_${attack.name}_${attack.damage}-fast`}
                  name={attack.name}
                  type={attack.type}
                  damage={attack.damage}
                  category="fast"
                />
              ))}
            </TableCell>
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

  .TypeTag {
    margin-bottom: ${spacing.small.level2};
  }
`;
