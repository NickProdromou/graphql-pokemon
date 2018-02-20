import React from "react";

import PokemonTypeTag from "../components/PokemonTypeTag";
import TableCell from "../components/TableCell";
import AttackCell from "../components/AttackCell";
import PokemonCard from "../components/PokemonCard";
import EvolutionRequirementsCard from "../components/EvolutionRequirementsCard";
import PokemonDimensions from "../components/PokemonDimensions";


 const mapFieldTypes = (field, value) => {
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
              {value.fast.map(attack => (
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


export default mapFieldTypes;
