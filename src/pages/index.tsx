import React from "react";

import Layout from "../components/Layout";
import Helmet from "../components/Helmet";
import { Hello, Travel, Skill, Photo, Other } from "../components/IndexShow";

const IndexPage = () => {
  return (
    <>
      <Helmet />

      <Layout>
        <Hello />
        <Travel />
        <Skill />
        <Photo />
        <Other />
      </Layout>
    </>
  );
};

export default IndexPage;
