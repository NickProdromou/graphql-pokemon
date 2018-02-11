import React from "react";
import Styled from "styled-components";
import { Page } from "hedron";

const App = () => (
  <SiteContainer fluid className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <MainSection fluid>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </MainSection>
    <footer>this is the footer</footer>
  </SiteContainer>
);

const SiteContainer = Styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainSection = Styled(Page)`
  flex: 1;
`;

export default App;
