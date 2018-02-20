import React from "react";

import Callout from "../components/Callout";
import PageContainer from "./PageContainer";

const ErrorPage = () => (
  <PageContainer>
    <Callout
      title="Error"
      subtitle="Sorry this page doesn't exist, press back on the browser or click on the site title to go back"
      stretch
    />
  </PageContainer>
);

export default ErrorPage;
