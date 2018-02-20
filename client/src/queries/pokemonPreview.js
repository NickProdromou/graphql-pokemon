import gql from "graphql-tag";

const pokemonPreviewQuery = gql`
  query($pokemonName: String) {
    pokemon(name: $pokemonName) {
      id
      image
      name
      types
      classification
    }
  }
`;

export default pokemonPreviewQuery;
