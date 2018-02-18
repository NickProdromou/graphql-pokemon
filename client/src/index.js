import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { injectGlobal } from "styled-components";

// import App from "./containers/App";
import AppRouter from "./containers/Router";
import client from "./api/client";
import globals from "./style/globals";

/*  eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
injectGlobal`${globals}`;

const renderTarget = document.getElementById("root");

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>,
  renderTarget
);
