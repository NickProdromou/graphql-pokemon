import React from "react";
import Styled from "styled-components";
import { Page } from "hedron";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Callout from "../components/Callout";
import PokemonSelection from "./PokemonSelection";

const App = () => (
  <SiteContainer fluid>
    <Header />
    <Page className="SiteContainerMain" fluid>
      <Callout
        title="Welcome to the Pokémon comparer"
        subtitle="Select 2 pokemon and compare their unique traits stats and skills against one another"
      />
      <PokemonSelection />
    </Page> 
    <Footer />
  </SiteContainer>
);

const SiteContainer = Styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .SiteContainerMain {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export default App;
