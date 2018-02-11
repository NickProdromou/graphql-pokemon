import React from "react";
import Styled from "styled-components";
import { Page } from "hedron";

import Header from "../components/Header";

const App = () => (
  <SiteContainer fluid>
    <Header />
    <Page className="SiteContainerMain" fluid>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </Page>
    <footer>this is the footer</footer>
  </SiteContainer>
);

const SiteContainer = Styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .SiteContainerMain {
    flex: 1;
  }
`;

export default App;
