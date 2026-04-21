import React from "react";

import SEO from "components/SEO";
import Greeting from "../containers/greeting/Greeting";
import Skills from "../containers/skills/Skills";
import NeuraX from "../containers/neurax/NeuraX";

const IndexPage = ({ theme }) => {
  return (
    <>
      <SEO />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <NeuraX theme={theme} />
    </>
  );
};

export default IndexPage;
