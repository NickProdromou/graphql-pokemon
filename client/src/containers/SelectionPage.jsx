import React from "react";

import PageContainer from "./PageContainer";
import Callout from "../components/Callout";
import PokemonSelection from "./PokemonSelection";

const SelectionPage = () => (
  <PageContainer>
    <Callout
      title="Welcome to the Pokémon comparer"
      subtitle="Select 2 pokemon and compare their unique traits stats and skills against one another"
    />
    <PokemonSelection />
  </PageContainer>
);

export default SelectionPage;
