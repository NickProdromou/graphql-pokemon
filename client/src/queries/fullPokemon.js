const basePokemon = `
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
      }
`

export default `
  ${basePokemon}
  evolutions {
    ${basePokemon}
  }
`;
      

