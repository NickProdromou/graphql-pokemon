import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Page } from "hedron";

import Header from "../components/Header";
import Footer from "../components/Footer";

const PageContainer = ({ children }) => (
  <SiteContainer fluid>
    <Header />
    <Page className="SiteContainerMain" fluid>
      {children}
    </Page>
    <Footer />
  </SiteContainer>
);

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

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

export default PageContainer;
