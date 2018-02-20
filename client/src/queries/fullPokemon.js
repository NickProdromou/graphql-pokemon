import gql from "graphql-tag";

const fullPokemonQuery = gql`
query($name: String) {
    pokemon(name: $name) {
      name
      number
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxCP
      maxHP
      image
      id
      evolutionRequirements {
        name
        amount
      }
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        special {
          name
          type
          damage
        }
        fast {
          name
          type
          damage
        }
      }
      evolutions {
        name
      }
  }
}
`
export default fullPokemonQuery;
